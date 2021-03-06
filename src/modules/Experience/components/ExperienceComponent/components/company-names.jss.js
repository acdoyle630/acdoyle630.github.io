import themes from "../../../../../themes/themes";
import colors from "../../../../../themes/colors";

const style = {
  companyNameList: {
    desktop: {
      fontSize: "20px",
    },
    tablet: {},
    mobile: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
  },
  companyName: {
    ...themes.componentSubHeader,
    marginBottom: "20px",
    marginTop: "20px",
    cursor: "pointer",
    width: "150px",
  },
  selectedCompany: {
    ...themes.componentSubHeader,
    marginBottom: "20px",
    marginTop: "20px",
    color: colors.third,
    cursor: "pointer",
    width: "150px",
  },
};

export default style;
