import Typography from "typography"
import deYoung from "typography-theme-de-young"

deYoung.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    a: {
      color: "hsl(122, 47%, 35%)",
      textDecoration: "none",
    },
    pre: {
      background: "rgba(0,0,0,0.05)",
      overflow: "auto",
    },
  }
}

delete deYoung.googleFonts

const typography = new Typography(deYoung)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
