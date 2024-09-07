import React, { useState, useRef } from "react";
import { addStyles, EditableMathField, MathField } from "react-mathquill";
import CascadingHoverMenus from "./CascadingHoverMenu";
import { useTheme } from "@emotion/react";

addStyles();

interface EquationInputProps {
  ButtonColor?: string;
}

export const EquationInput: React.FC<EquationInputProps> = ({
  ButtonColor,
}) => {
  const [latex, setLatex] = useState("\\int\\frac{1}{\\sqrt{2}}\\cdot 2");
  const mathFieldRef = useRef<MathField | null>(null);
  const theme = useTheme();

  const handleMathFieldChange = (mathField: MathField) => {
    setLatex(mathField.latex());
  };

  const handleSubMenuButtonClick = (LaTeXString: string) => {
    if (mathFieldRef.current) {
      mathFieldRef.current.write(`${LaTeXString}`);
    }
  };

  const menuStructure = [
    {
      title: "Calculus",
      submenu: [
        {
          title: "Limit",
          onClick: () => handleSubMenuButtonClick("\\lim_{x \\to a}"),
        },
        {
          title: "Epsilon",
          onClick: () => handleSubMenuButtonClick("\\lim_{x \\to a}"),
        },
        {
          title: "Delta",
          onClick: () => handleSubMenuButtonClick("\\lim_{x \\to a}"),
        },
        {
          title: "Euler's Number",
          onClick: () => handleSubMenuButtonClick("\\lim_{x \\to a}"),
        },
        {
          title: "Derivative (Lagrange)",
          onClick: () => handleSubMenuButtonClick("\\lim_{x \\to a}"),
        },
        {
          title: "Second Derivative (Lagrange)",
          onClick: () => handleSubMenuButtonClick("\\lim_{x \\to a}"),
        },
        {
          title: "Third Derivative (Lagrange)",
          onClick: () => handleSubMenuButtonClick("\\lim_{x \\to a}"),
        },
        {
          title: "Derivative (Leibniz)",
          onClick: () => handleSubMenuButtonClick("\\lim_{x \\to a}"),
        },
        {
          title: "Second Derivative (Leibniz)",
          onClick: () => handleSubMenuButtonClick("\\lim_{x \\to a}"),
        },
        {
          title: "Third Derivative (Leibniz)",
          onClick: () => handleSubMenuButtonClick("\\lim_{x \\to a}"),
        },
        {
          title: "Time Derivative (Newton)",
          onClick: () => handleSubMenuButtonClick("\\lim_{x \\to a}"),
        },
        {
          title: "Time Derivative (Newton)",
          onClick: () => handleSubMenuButtonClick("\\lim_{x \\to a}"),
        },
        {
          title: "Derivative (Euler)",
          onClick: () => handleSubMenuButtonClick("\\lim_{x \\to a}"),
        },
        {
          title: "Second Derivative (Euler)",
          onClick: () => handleSubMenuButtonClick("\\lim_{x \\to a}"),
        },
        {
          title: "Definite Integral",
          onClick: () => handleSubMenuButtonClick("\\int"),
        },
        {
          title: "Indefinite Integral",
          onClick: () => handleSubMenuButtonClick("\\int_{\u200B}^{\u200B}"),
        },
        {
          title: "Partial Derivative",
          onClick: () =>
            handleSubMenuButtonClick(
              "\\frac{\\partial}{\\partial x}\\left(\\right)"
            ),
        },
        {
          title: "Closed Contour Integral",
          onClick: () => handleSubMenuButtonClick("\\oint"),
        },
        {
          title: "Closed Surface Integral",
          onClick: () => handleSubMenuButtonClick("\\oint_S"),
        },
        {
          title: "Closed Volume Integral",
          onClick: () => handleSubMenuButtonClick("\\oint_V"),
        },
        {
          title: "Complex Conjugate",
          onClick: () => handleSubMenuButtonClick("\\overline{Z}"),
        },
        {
          title: "Real Part of Complex Number",
          onClick: () => handleSubMenuButtonClick("\\text{Re}"),
        },
        {
          title: "Imaginary Part of Complex Number",
          onClick: () => handleSubMenuButtonClick("\\text{Im}"),
        },
        {
          title: "Argument of Complex Number",
          onClick: () => handleSubMenuButtonClick("\\arg"),
        },
        {
          title: "Nabla",
          onClick: () => handleSubMenuButtonClick("\\nabla"),
        },
        {
          title: "Vector",
          onClick: () => handleSubMenuButtonClick("\\vec{v}"),
        },
        {
          title: "Unit Vector",
          onClick: () => handleSubMenuButtonClick("\\hat{v}"),
        },
        {
          title: "Convolution",
          onClick: () => handleSubMenuButtonClick("\\ast"),
        },
        {
          title: "Laplace Transform",
          onClick: () => handleSubMenuButtonClick("L"),
        },
        {
          title: "Fourier Transform",
          onClick: () => handleSubMenuButtonClick("F"),
        },
      ],
    },
    {
      title: "Basic Math",
      submenu: [
        {
          title: "Nth Root (Radical)",
          onClick: () => handleSubMenuButtonClick("\\sqrt[ ]{ }"),
        },
        {
          title: "Square Root",
          onClick: () => handleSubMenuButtonClick("\\sqrt{ }"),
        },
        {
          title: "Cube Root",
          onClick: () => handleSubMenuButtonClick("\\sqrt[3]{ }"),
        },
        {
          title: "Pi",
          onClick: () => handleSubMenuButtonClick("\\pi"),
        },
        {
          title: "Infinity",
          onClick: () => handleSubMenuButtonClick("\\infty"),
        },
        { title: "Equals", onClick: () => handleSubMenuButtonClick("\\=") },
        {
          title: "Not Equals",
          onClick: () => handleSubMenuButtonClick("\\neq"),
        },
        {
          title: "Approximately Equal",
          onClick: () => handleSubMenuButtonClick("\\approx"),
        },
        {
          title: "Greater Than",
          onClick: () => handleSubMenuButtonClick("\\>"),
        },
        { title: "Less Than", onClick: () => handleSubMenuButtonClick("\\<") },
        {
          title: "Greater Than or Equal To",
          onClick: () => handleSubMenuButtonClick("\\geq"),
        },
        {
          title: "Less Than or Equal To",
          onClick: () => handleSubMenuButtonClick("\\leq"),
        },
        {
          title: "Plus-Minus",
          onClick: () => handleSubMenuButtonClick("\\pm"),
        },
        {
          title: "Minus-Plus",
          onClick: () => handleSubMenuButtonClick("\\mp"),
        },
        {
          title: "Modulo",
          onClick: () => handleSubMenuButtonClick("\\text{mod}"),
        },
        {
          title: "Per-Million",
          onClick: () => handleSubMenuButtonClick("\\text{ppm}"),
        },
        {
          title: "Per-Billion",
          onClick: () => handleSubMenuButtonClick("\\text{ppb}"),
        },
        {
          title: "Per-Trillion",
          onClick: () => handleSubMenuButtonClick("\\text{ppt}"),
        },
        {
          title: "Scientific Notation",
          onClick: () => handleSubMenuButtonClick("\\times 10^{}"),
        },
        {
          title: "Percent",
          onClick: () => handleSubMenuButtonClick("\\%"),
        },
        {
          title: "Per-Mille",
          onClick: () => handleSubMenuButtonClick("\\text{‰}"),
        },
      ],
    },
    {
      title: "Algebra",
      submenu: [
        {
          title: "Equivalence",
          onClick: () => handleSubMenuButtonClick("\\equiv"),
        },
        {
          title: "Equal By Definition",
          onClick: () => handleSubMenuButtonClick("\\overset{\\text{def}}{=}"), // Not Currently working, \\coloneqq is also not working
        },
        {
          title: "Propotional To",
          onClick: () => handleSubMenuButtonClick("\\propto"),
        },
        {
          title: "Much Less Than",
          onClick: () => handleSubMenuButtonClick("\\ll"),
        },
        {
          title: "Much greater Than",
          onClick: () => handleSubMenuButtonClick("\\gg"),
        },
        {
          title: "Floor Brackets",
          onClick: () => handleSubMenuButtonClick("\\lfloor x \\rfloor"),
        },
        {
          title: "Ceiling Brackets",
          onClick: () => handleSubMenuButtonClick("\\lceil x \\rceil"),
        },
        {
          title: "Factorial",
          onClick: () => handleSubMenuButtonClick("!"),
        },
        {
          title: "Absolute Value",
          onClick: () => handleSubMenuButtonClick("\\left| x \\right|"),
        },
        {
          title: "Function of x",
          onClick: () => handleSubMenuButtonClick("f(x)"),
        },
        {
          title: "Function Composition",
          onClick: () => handleSubMenuButtonClick("\\circ"),
        },
        {
          title: "Delta",
          onClick: () => handleSubMenuButtonClick("\\Delta"),
        },
        {
          title: "Discriminant",
          onClick: () => handleSubMenuButtonClick("\\Delta"),
        },
        {
          title: "Summation",
          onClick: () => handleSubMenuButtonClick("\\sum"),
        },
        {
          title: "Product",
          onClick: () => handleSubMenuButtonClick("\\prod"),
        },
        {
          title: "Euler's Number",
          onClick: () => handleSubMenuButtonClick("e"),
        },
        {
          title: "Euler-Mascheroni Constant",
          onClick: () => handleSubMenuButtonClick("\\gamma_{EM}"),
        },
        {
          title: "Golden Ratio",
          onClick: () => handleSubMenuButtonClick("\\phi"),
        },
      ],
    },
    {
      title: "Geometry",
      submenu: [
        { title: "Angle", onClick: () => handleSubMenuButtonClick("\\angle") },
        {
          title: "Measured Angle",
          onClick: () => handleSubMenuButtonClick("\\measuredangle"),
        },
        {
          title: "Right Angle",
          onClick: () => handleSubMenuButtonClick("\\angle"),
        },
        {
          title: "Degree",
          onClick: () => handleSubMenuButtonClick("°"),
        },
        {
          title: "Prime (Arcminute)",
          onClick: () => handleSubMenuButtonClick("\\'"),
        },
        {
          title: "Prime (Arcsecond)",
          onClick: () => handleSubMenuButtonClick("\\'\\'"),
        },
        {
          title: "Line Segment",
          onClick: () => handleSubMenuButtonClick("\\overline{AB}"),
        },
        {
          title: "Infinite Line",
          onClick: () => handleSubMenuButtonClick("\\overleftrightarrow{AB}"),
        },
        {
          title: "Ray",
          onClick: () => handleSubMenuButtonClick("\\overrightarrow{AB}"),
        },
        {
          title: "Arc (BROKEN, NOT WORKING)",
          onClick: () =>
            handleSubMenuButtonClick("\\stackrel{LARGE\\frown}{DCA}"), // Currently Inoperable
        },
        {
          title: "Perpendicular",
          onClick: () => handleSubMenuButtonClick("\\perp"),
        },
        {
          title: "Parallel",
          onClick: () => handleSubMenuButtonClick("\\parallel"),
        },
        {
          title: "Congruent",
          onClick: () => handleSubMenuButtonClick("\\cong"),
        },
        {
          title: "Similarity",
          onClick: () => handleSubMenuButtonClick("\\sim"),
        },
        {
          title: "Triangle",
          onClick: () => handleSubMenuButtonClick("\\triangle"),
        },
        {
          title: "Radians",
          onClick: () => handleSubMenuButtonClick("\\text{rad}"),
        },
        {
          title: "Gradians",
          onClick: () => handleSubMenuButtonClick("\\text{grad}"),
        },
      ],
    },
    {
      title: "Set Theory",
      submenu: [
        {
          title: "Element Of",
          onClick: () => handleSubMenuButtonClick("\\in"),
        },
        {
          title: "Not Element Of",
          onClick: () => handleSubMenuButtonClick("\\notin"),
        },
        {
          title: "Intersection",
          onClick: () => handleSubMenuButtonClick("\\cap"),
        },
        {
          title: "Union",
          onClick: () => handleSubMenuButtonClick("\\cup"),
        },
        {
          title: "Subset",
          onClick: () => handleSubMenuButtonClick("\\subseteq"),
        },
        {
          title: "Proper Subset",
          onClick: () => handleSubMenuButtonClick("\\subset"),
        },
        {
          title: "Not Subset",
          onClick: () => handleSubMenuButtonClick("\\nsubseteq"),
        },
        {
          title: "Superset",
          onClick: () => handleSubMenuButtonClick("\\supseteq"),
        },
        {
          title: "Proper Superset",
          onClick: () => handleSubMenuButtonClick("\\supset"),
        },
        {
          title: "Cartesian Product",
          onClick: () => handleSubMenuButtonClick("\\times"),
        },
        {
          title: "Cardinality",
          onClick: () => handleSubMenuButtonClick("|A|"),
        },
        {
          title: "Aleph Null",
          onClick: () => handleSubMenuButtonClick("\\aleph_0"),
        },
        {
          title: "Aleph One",
          onClick: () => handleSubMenuButtonClick("\\aleph_1"),
        },
        {
          title: "Empty Set",
          onClick: () => handleSubMenuButtonClick("\\emptyset"),
        },
        {
          title: "Power Set",
          onClick: () => handleSubMenuButtonClick("\\P()"),
        },
        {
          title: "Complement",
          onClick: () => handleSubMenuButtonClick("A^c"),
        },
        {
          title: "Relative Complement",
          onClick: () => handleSubMenuButtonClick("A \\setminus B"),
        },
        {
          title: "Symmetric Difference",
          onClick: () => handleSubMenuButtonClick("A \\triangle B"),
        },
        {
          title: "Universal Set",
          onClick: () => handleSubMenuButtonClick("\\U"),
        },
        {
          title: "Natural Numbers Set",
          onClick: () => handleSubMenuButtonClick("\\N"),
        },
        {
          title: "Integers Set",
          onClick: () => handleSubMenuButtonClick("\\Z"),
        },
        {
          title: "Rational Numbers Set",
          onClick: () => handleSubMenuButtonClick("\\Q"),
        },
        {
          title: "Real Numbers Set",
          onClick: () => handleSubMenuButtonClick("\\R"),
        },
        {
          title: "Complex Numbers Set",
          onClick: () => handleSubMenuButtonClick("\\C"),
        },
      ],
    },
    {
      title: "Logic",
      submenu: [
        {
          title: "AND",
          onClick: () => handleSubMenuButtonClick("\\land"),
        },
        {
          title: "OR",
          onClick: () => handleSubMenuButtonClick("\\lor"),
        },
        {
          title: "NOT",
          onClick: () => handleSubMenuButtonClick("\\neg"),
        },
        {
          title: "IMPLIES RIGHT",
          onClick: () => handleSubMenuButtonClick("\\implies"),
        },
        {
          title: "IMPLIES LEFT",
          onClick: () => handleSubMenuButtonClick("\\impliedby"),
        },
        {
          title: "OPLUS",
          onClick: () => handleSubMenuButtonClick("\\oplus"),
        },
        {
          title: "IFF",
          onClick: () => handleSubMenuButtonClick("\\iff"),
        },
        {
          title: "For All",
          onClick: () => handleSubMenuButtonClick("\\forall"),
        },
        {
          title: "There Exists",
          onClick: () => handleSubMenuButtonClick("\\exists"),
        },
        {
          title: "There Does Not Exist",
          onClick: () => handleSubMenuButtonClick("\\nexists"),
        },
        {
          title: "Therefore",
          onClick: () => handleSubMenuButtonClick("\\therefore"),
        },
        {
          title: "Because / Since",
          onClick: () => handleSubMenuButtonClick("\\because"),
        },
      ],
    },
    {
      title: "Linear Algebra",
      submenu: [
        {
          title: "Dot Product",
          onClick: () => handleSubMenuButtonClick("\\cdot"),
        },
        {
          title: "Cross Product",
          onClick: () => handleSubMenuButtonClick("\\times"),
        },
        {
          title: "Tensor Product",
          onClick: () => handleSubMenuButtonClick("\\otimes"),
        },
        {
          title: "Inner Product",
          onClick: () => handleSubMenuButtonClick("\u27E8 \u27E9"), //Not Working
        },
        {
          title: "Brackets",
          onClick: () => handleSubMenuButtonClick("\\left[ \\right]"),
        },
        {
          title: "Parentheses",
          onClick: () => handleSubMenuButtonClick("\\left( \\right)"),
        },
        {
          title: "Determinant",
          onClick: () => handleSubMenuButtonClick("\\det(A)"),
        },
        {
          title: "Double Vertical Bars / Norm",
          onClick: () => handleSubMenuButtonClick("||A||"),
        },
        {
          title: "Transpose",
          onClick: () => handleSubMenuButtonClick("A^T"),
        },
        {
          title: "Hermitian Matrix",
          onClick: () => handleSubMenuButtonClick("A^\\dagger"),
        },
        {
          title: "Inverse Matrix",
          onClick: () => handleSubMenuButtonClick("A^{-1}"),
        },
        {
          title: "Matrix Rank",
          onClick: () => handleSubMenuButtonClick("\\text{rank}(A)"),
        },
        {
          title: "Dimension",
          onClick: () => handleSubMenuButtonClick("\\dim(V)"),
        },
      ],
    },
    {
      title: "Probability and Statistics",
      submenu: [
        {
          title: "Probability Function",
          onClick: () => handleSubMenuButtonClick("P(A)"),
        },
        {
          title: "Probability of Events Intersection",
          onClick: () => handleSubMenuButtonClick("P(A \\cap B)"),
        },
        {
          title: "Probability of Events Union",
          onClick: () => handleSubMenuButtonClick("P(A \\cup B)"),
        },
        {
          title: "Conditional Probability",
          onClick: () => handleSubMenuButtonClick("P(A \\mid B)"),
        },
        {
          title: "Probability Density Function",
          onClick: () => handleSubMenuButtonClick("f(x)"),
        },
        {
          title: "Cumulative Distribution Function",
          onClick: () => handleSubMenuButtonClick("F(x)"),
        },
        {
          title: "Population Mean",
          onClick: () => handleSubMenuButtonClick("\\mu"),
        },
        {
          title: "Expectation Value",
          onClick: () => handleSubMenuButtonClick("E(X)"),
        },
        {
          title: "Conditional Expectation",
          onClick: () => handleSubMenuButtonClick("E(X \\mid Y)"),
        },
        {
          title: "Variance",
          onClick: () => handleSubMenuButtonClick("\\text{var}(X)"),
        },
        {
          title: "Variance of Population",
          onClick: () => handleSubMenuButtonClick("\\sigma^2"),
        },
        {
          title: "Standard Deviation",
          onClick: () => handleSubMenuButtonClick("\\text{std}(X)"),
        },
        {
          title: "Standard Deviation of X",
          onClick: () => handleSubMenuButtonClick("\\sigma_X"),
        },
        {
          title: "Covariance",
          onClick: () => handleSubMenuButtonClick("\\text{cov}(X,Y)"),
        },
        {
          title: "Correlation",
          onClick: () => handleSubMenuButtonClick("\\text{corr}(X,Y)"),
        },
        {
          title: "Correlation (ρ)",
          onClick: () => handleSubMenuButtonClick("\\rho_{X,Y}"),
        },
        {
          title: "Summation",
          onClick: () => handleSubMenuButtonClick("\\sum"),
        },
        {
          title: "Double Summation",
          onClick: () => handleSubMenuButtonClick("\\sum \\sum"),
        },
        {
          title: "Mode",
          onClick: () => handleSubMenuButtonClick("\\text{Mo}"),
        },
        {
          title: "Mid-Range",
          onClick: () =>
            handleSubMenuButtonClick(
              "\\text{MR} = \\frac{x_{\\text{max}} + x_{\\text{min}}}{2}"
            ),
        },
        {
          title: "Sample Median",
          onClick: () => handleSubMenuButtonClick("\\text{Md}"),
        },
        {
          title: "Lower Quartile (Q1)",
          onClick: () => handleSubMenuButtonClick("Q_1"),
        },
        {
          title: "Median / Second Quartile (Q2)",
          onClick: () => handleSubMenuButtonClick("Q_2"),
        },
        {
          title: "Upper Quartile (Q3)",
          onClick: () => handleSubMenuButtonClick("Q_3"),
        },
        {
          title: "Sample Mean",
          onClick: () => handleSubMenuButtonClick("\\bar{x}"),
        },
        {
          title: "Sample Variance",
          onClick: () => handleSubMenuButtonClick("s^2"),
        },
        {
          title: "Sample Standard Deviation",
          onClick: () => handleSubMenuButtonClick("s"),
        },
        {
          title: "Standard Score (z-score)",
          onClick: () =>
            handleSubMenuButtonClick("z_x = \\frac{x - \\bar{x}}{s_x}"),
        },
        {
          title: "Distribution of X",
          onClick: () => handleSubMenuButtonClick("X \\sim"),
        },
        {
          title: "Normal Distribution",
          onClick: () => handleSubMenuButtonClick("X \\sim N(\\mu, \\sigma^2)"),
        },
        {
          title: "Uniform Distribution",
          onClick: () => handleSubMenuButtonClick("X \\sim U(a,b)"),
        },
        {
          title: "Exponential Distribution",
          onClick: () =>
            handleSubMenuButtonClick("X \\sim \\text{exp}(\\lambda)"),
        },
        {
          title: "Gamma Distribution",
          onClick: () =>
            handleSubMenuButtonClick("X \\sim \\Gamma(c, \\lambda)"),
        },
        {
          title: "Chi-Square Distribution",
          onClick: () => handleSubMenuButtonClick("X \\sim \\chi^2(k)"),
        },
        {
          title: "F Distribution",
          onClick: () => handleSubMenuButtonClick("X \\sim F(k_1, k_2)"),
        },
        {
          title: "Binomial Distribution",
          onClick: () => handleSubMenuButtonClick("X \\sim \\text{Bin}(n,p)"),
        },
        {
          title: "Poisson Distribution",
          onClick: () =>
            handleSubMenuButtonClick("X \\sim \\text{Poisson}(\\lambda)"),
        },
        {
          title: "Geometric Distribution",
          onClick: () => handleSubMenuButtonClick("X \\sim \\text{Geom}(p)"),
        },
        {
          title: "Hypergeometric Distribution",
          onClick: () => handleSubMenuButtonClick("X \\sim \\text{HG}(N,K,n)"),
        },
        {
          title: "Bernoulli Distribution",
          onClick: () => handleSubMenuButtonClick("X \\sim \\text{Bern}(p)"),
        },
      ],
    },
    {
      title: "Combinatorics",
      submenu: [
        {
          title: "Factorial",
          onClick: () => handleSubMenuButtonClick("!"),
        },
        {
          title: "Permutation",
          onClick: () => handleSubMenuButtonClick("_nP_k"),
        },
        {
          title: "Combination",
          onClick: () => handleSubMenuButtonClick("_nC_k"),
        },
        {
          title: "Combination ()",
          onClick: () => handleSubMenuButtonClick("\\binom{n}{k}"),
        },
        {
          title: "Permutation Definition",
          onClick: () => handleSubMenuButtonClick("\\frac{n!}{(n - r)!}"),
        },
        {
          title: "Combination Definition",
          onClick: () => handleSubMenuButtonClick("\\frac{n!}{r!(n - r)!}"),
        },
      ],
    },
  ];

  const getButtonColor = (ButtonColor?: string) => {
    if (ButtonColor == "primary") return theme.palette.primary.main;
    if (ButtonColor == "secondary") return theme.palette.secondary.main;
    return ButtonColor;
  };

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
      <CascadingHoverMenus
        menuStructure={menuStructure}
        Color={ButtonColor ? getButtonColor(ButtonColor) : "Red"}
      />
    </div>
  );
};
