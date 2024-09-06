import { Button, Menu, MenuItem, Tooltip } from "@mui/material";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
/*import { usePopupState } from "material-ui-popup-state/hooks";*/
import React, { useState, useRef } from "react";
import { addStyles, EditableMathField, MathField } from "react-mathquill";

addStyles();

export const EquationTest = () => {
  const [latex, setLatex] = useState("\\int\\frac{1}{\\sqrt{2}}\\cdot 2");
  const mathFieldRef = useRef<MathField | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [submenuItems, setSubmenuItems] = useState<
    { name: string; onClick: () => void }[]
  >([]);

  const handleMathFieldChange = (mathField: MathField) => {
    setLatex(mathField.latex());
  };

  const handleMenuItemMouseOver = (
    event: React.MouseEvent<HTMLElement>,
    items: { name: string; onClick: () => void }[]
  ) => {
    setAnchorEl(event.currentTarget);
    setSubmenuItems(items);
  };

  const handleSubmenuClose = () => {
    setAnchorEl(null);
  };

  const displayMenu = () => {
    console.warn("Menu Displayed");
  };

  // Write the integral into the math field
  const handleIntegralButtonClick = () => {
    if (mathFieldRef.current) {
      mathFieldRef.current.write("\\int");
    }
  };

  const handleLogicalNOTButtonClick = () => {
    if (mathFieldRef.current) {
      mathFieldRef.current.write("\\neg");
    }
  };

  const handleNthRootRadicalButtonClick = () => {
    if (mathFieldRef.current) {
      mathFieldRef.current.write("\\sqrt[n]{expression");
    }
  };

  const handleLogicalANDButtonClick = () => {
    if (mathFieldRef.current) {
      mathFieldRef.current.write("\\land");
    }
  };

  const handleLineIntegralButtonClick = () => {
    if (mathFieldRef.current) {
      mathFieldRef.current.write("\\[ \\angle \\]");
    }
  };

  const handleAngleButtonClick = () => {
    if (mathFieldRef.current) {
      mathFieldRef.current.write("\\oint");
    }
  };

  const CalculusListItems = [
    { name: "Integral", onClick: handleIntegralButtonClick },
    { name: "Line Integral", onClick: handleLineIntegralButtonClick },
  ];

  const BasicMathListItems = [
    { name: "Nth Root", onClick: handleNthRootRadicalButtonClick },
  ];

  const GeometryListItems = [
    { name: "Angle", onClick: handleAngleButtonClick },
  ];

  const SetTheoryListItems = [
    { name: "Angle", onClick: handleAngleButtonClick },
  ];

  const LogicListItems = [{ name: "Angle", onClick: handleAngleButtonClick }];

  const LinearAlgebraListItems = [
    { name: "Angle", onClick: handleAngleButtonClick },
  ];

  const ProbabilityAndStatisticsListItems = [
    { name: "Angle", onClick: handleAngleButtonClick },
  ];

  const CombinatoricsListItems = [
    { name: "Angle", onClick: handleAngleButtonClick },
  ];

  return (
    <div>
      {/* Allows for editing of LaTeX in a human readable way */}
      <EditableMathField
        latex={latex}
        onChange={handleMathFieldChange}
        mathquillDidMount={(mathField) => {
          mathFieldRef.current = mathField;
        }}
      />

      {/* Display current LaTeX */}
      <p>{latex}</p>

      {/* Button to see symbols menu */}
      <Tooltip title="Insert Symbols">
        <PopupState variant="popover" popupId="custom-symbol-menu">
          {(popupState) => {
            return (
              <React.Fragment>
                <Button variant="contained" {...bindTrigger(popupState)}>
                  Symbols Menu
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem
                    onMouseOver={(e) =>
                      handleMenuItemMouseOver(e, BasicMathListItems)
                    }
                  >
                    Basic Math Symbols
                  </MenuItem>
                  <MenuItem
                    onMouseOver={(e) =>
                      handleMenuItemMouseOver(e, CalculusListItems)
                    }
                  >
                    Calculus
                  </MenuItem>
                  <MenuItem
                    onMouseOver={(e) =>
                      handleMenuItemMouseOver(e, GeometryListItems)
                    }
                  >
                    Geometry
                  </MenuItem>
                  <MenuItem
                    onMouseOver={(e) =>
                      handleMenuItemMouseOver(e, SetTheoryListItems)
                    }
                  >
                    Set Theory
                  </MenuItem>
                  <MenuItem
                    onMouseOver={(e) =>
                      handleMenuItemMouseOver(e, LogicListItems)
                    }
                  >
                    Logic
                  </MenuItem>
                  <MenuItem
                    onMouseOver={(e) =>
                      handleMenuItemMouseOver(e, LinearAlgebraListItems)
                    }
                  >
                    Linear Algebra
                  </MenuItem>
                  <MenuItem
                    onMouseOver={(e) =>
                      handleMenuItemMouseOver(
                        e,
                        ProbabilityAndStatisticsListItems
                      )
                    }
                  >
                    Probability and Statistics
                  </MenuItem>
                  <MenuItem
                    onMouseOver={(e) =>
                      handleMenuItemMouseOver(e, CombinatoricsListItems)
                    }
                  >
                    Combinatorics
                  </MenuItem>
                </Menu>

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleSubmenuClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  {submenuItems.map((item, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => {
                        item.onClick();
                        handleSubmenuClose();
                      }}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </Menu>
              </React.Fragment>
            );
          }}
        </PopupState>
      </Tooltip>
    </div>
  );
};
