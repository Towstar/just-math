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
    console.log("SubmenuClose is being called");
    setAnchorEl(null);
  };

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
      mathFieldRef.current.write("\\sqrt[n]{ }");
    }
  };

  const handleLogicalANDButtonClick = () => {
    if (mathFieldRef.current) {
      mathFieldRef.current.write("\\land");
    }
  };

  const handlePartialDerivativeButtonClick = () => {
    if (mathFieldRef.current) {
      mathFieldRef.current.write(
        "\\frac{\\partial}{\\partial x}\\left(\\right)"
      );
    }
  };

  const handleLineIntegralButtonClick = () => {
    if (mathFieldRef.current) {
      mathFieldRef.current.write("\\oint");
    }
  };

  const handleAngleButtonClick = () => {
    if (mathFieldRef.current) {
      mathFieldRef.current.write("\\angle");
    }
  };

  const handleInfinityButtonClick = () => {
    if (mathFieldRef.current) {
      mathFieldRef.current.write("\\infty");
    }
  };

  const CalculusListItems = [
    { name: "Integral", onClick: handleIntegralButtonClick },
    { name: "Closed Line Integral", onClick: handleLineIntegralButtonClick },
    { name: "Partial Derivative", onClick: handlePartialDerivativeButtonClick },
  ];

  const BasicMathListItems = [
    { name: "Nth Root", onClick: handleNthRootRadicalButtonClick },
    { name: "Infinity", onClick: handleInfinityButtonClick },
  ];

  const GeometryListItems = [
    { name: "Angle", onClick: handleAngleButtonClick },
  ];

  const SetTheoryListItems = [
    { name: "Angle", onClick: handleAngleButtonClick },
  ];

  const LogicListItems = [
    { name: "AND", onClick: handleLogicalANDButtonClick },
    { name: "NOT", onClick: handleLogicalNOTButtonClick },
  ];

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

      <PopupState variant="popover" popupId="custom-symbol-menu">
        {(popupState) => {
          return (
            <React.Fragment>
              <Tooltip title="Insert Symbols">
                <Button variant="contained" {...bindTrigger(popupState)}>
                  Symbols Menu
                </Button>
              </Tooltip>
              <Menu {...bindMenu(popupState)}>
                <MenuItem
                  onMouseOver={(e) =>
                    handleMenuItemMouseOver(e, BasicMathListItems)
                  }
                  onMouseLeave={(e) => {
                    console.log("OnMouseLeave", e);
                  }}
                >
                  Basic Math Symbols
                </MenuItem>
                <MenuItem
                  onMouseOver={(e) =>
                    handleMenuItemMouseOver(e, CalculusListItems)
                  }
                  onMouseLeave={(e) => {
                    console.log("OnMouseLeave", e);
                  }}
                >
                  Calculus
                </MenuItem>
                <MenuItem
                  onMouseOver={(e) =>
                    handleMenuItemMouseOver(e, GeometryListItems)
                  }
                  onMouseLeave={(e) => {
                    console.log("OnMouseLeave", e);
                  }}
                >
                  Geometry
                </MenuItem>
                <MenuItem
                  onMouseOver={(e) =>
                    handleMenuItemMouseOver(e, SetTheoryListItems)
                  }
                  onMouseLeave={(e) => {
                    console.log("OnMouseLeave", e);
                  }}
                >
                  Set Theory
                </MenuItem>
                <MenuItem
                  onMouseOver={(e) =>
                    handleMenuItemMouseOver(e, LogicListItems)
                  }
                  onMouseLeave={(e) => {
                    console.log("OnMouseLeave", e);
                  }}
                >
                  Logic
                </MenuItem>
                <MenuItem
                  onMouseOver={(e) =>
                    handleMenuItemMouseOver(e, LinearAlgebraListItems)
                  }
                  onMouseLeave={(e) => {
                    console.log("OnMouseLeave", e);
                  }}
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
                  onMouseLeave={(e) => {
                    console.log("OnMouseLeave", e);
                  }}
                >
                  Probability and Statistics
                </MenuItem>
                <MenuItem
                  onMouseOver={(e) =>
                    handleMenuItemMouseOver(e, CombinatoricsListItems)
                  }
                  onMouseLeave={(e) => {
                    console.log("OnMouseLeave", e);
                  }}
                  onMouseOut={(e) => {
                    console.log("OnMouseOut", e);
                  }}
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
                onMouseLeave={handleSubmenuClose}
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
    </div>
  );
};
