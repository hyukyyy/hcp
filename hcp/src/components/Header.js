const Header = () => {
  return (
    <div
      style={{
        height: 300,
        width: "100%",
        background: require("../img/marriage_opacity.jpg").default,
        backgroundColor: "white",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Petit Formal Script', 'cursive'",

        color: "black",
        fontSize: "10rem",

        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#F0F0F2",
        
      }}
      className="headerWrapper"
    >
      HCP
    </div>
  );
};

export default Header;
