import * as React from "react";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ChevronRight from "@mui/icons-material/ChevronRight";
import {
  usePopupState,
  bindHover,
  bindFocus,
  bindMenu,
} from "material-ui-popup-state/hooks";
import { PopupState } from "material-ui-popup-state/hooks";
import { Box } from "@mui/material";

const styles = {
  submenu: {
    marginTop: "-8px",
  },
  title: {
    flexGrow: 1,
  },
  moreArrow: {
    marginRight: "-8px",
  },
};

interface CascadingContextType {
  parentPopupState: PopupState | null;
  rootPopupState: PopupState | null;
}

const CascadingContext = React.createContext<CascadingContextType>({
  parentPopupState: null,
  rootPopupState: null,
});

interface CascadingMenuItemProps {
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  children: React.ReactNode;
}

function CascadingMenuItem({ onClick, ...props }: CascadingMenuItemProps) {
  const { rootPopupState } = React.useContext(CascadingContext);
  if (!rootPopupState) throw new Error("must be used inside a CascadingMenu");

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      rootPopupState.close(event);
      if (onClick) onClick(event);
    },
    [rootPopupState, onClick]
  );

  return <MenuItem {...props} onClick={handleClick} />;
}

interface CascadingSubmenuProps {
  title: string;
  popupId: string;
  children: React.ReactNode;
}

function CascadingSubmenu({ title, popupId, ...props }: CascadingSubmenuProps) {
  const { parentPopupState } = React.useContext(CascadingContext);
  const popupState = usePopupState({
    popupId,
    variant: "popover",
    parentPopupState,
  });

  return (
    <React.Fragment>
      <MenuItem {...bindHover(popupState)} {...bindFocus(popupState)}>
        <span style={styles.title}>{title}</span>
        <ChevronRight sx={styles.moreArrow} />
      </MenuItem>
      <CascadingMenu
        {...props}
        sx={styles.submenu}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        popupState={popupState}
      />
    </React.Fragment>
  );
}

interface CascadingMenuProps {
  popupState: PopupState;
  children: React.ReactNode;
  anchorOrigin: {
    vertical: "bottom" | "top" | "center";
    horizontal: "left" | "right" | "center";
  };
  transformOrigin: {
    vertical: "bottom" | "top" | "center";
    horizontal: "left" | "right" | "center";
  };
  sx?: object;
}

function CascadingMenu({ popupState, sx, ...props }: CascadingMenuProps) {
  const { rootPopupState } = React.useContext(CascadingContext);
  const context = React.useMemo(
    () => ({
      rootPopupState: rootPopupState || popupState,
      parentPopupState: popupState,
    }),
    [rootPopupState, popupState]
  );

  return (
    <CascadingContext.Provider value={context}>
      <HoverMenu sx={sx} {...props} {...bindMenu(popupState)} />
    </CascadingContext.Provider>
  );
}

interface MenuItemType {
  title: string;
  onClick?: () => void;
  submenu?: MenuItemType[];
}

interface CascadingHoverMenusProps {
  menuStructure: MenuItemType[];
  Color?: string;
}

const CascadingHoverMenus: React.FC<CascadingHoverMenusProps> = ({
  menuStructure,
  Color,
}) => {
  const popupState = usePopupState({
    popupId: "demoMenu",
    variant: "popover",
  });

  const renderMenuItems = (items: MenuItemType[], parentPopupId?: string) => {
    return items.map((item, index) => {
      if (item.submenu && item.submenu.length > 0) {
        return (
          <CascadingSubmenu
            key={index}
            popupId={`${parentPopupId}-${index}`}
            title={item.title}
          >
            {renderMenuItems(item.submenu, `${parentPopupId}-${index}`)}
          </CascadingSubmenu>
        );
      }
      return (
        <CascadingMenuItem key={index} onClick={item.onClick}>
          {item.title}
        </CascadingMenuItem>
      );
    });
  };

  return (
    <div style={{ height: 600 }}>
      <Box sx={{ m: 1 }}>
        <Button
          variant="contained"
          {...bindHover(popupState)}
          {...bindFocus(popupState)}
          sx={{ backgroundColor: Color }}
        >
          Editor Menu
        </Button>
      </Box>
      <CascadingMenu
        popupState={popupState}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {renderMenuItems(menuStructure, "rootMenu")}
      </CascadingMenu>
    </div>
  );
};

export default CascadingHoverMenus;
