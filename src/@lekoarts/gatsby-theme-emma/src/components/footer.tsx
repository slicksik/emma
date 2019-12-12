/** @jsx jsx */
import { Footer as ThemeFooter, Styled, Flex, jsx } from "theme-ui"

const Footer = () => (
  <ThemeFooter>
    Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    <br />
    <Flex
      sx={{
        justifyContent: `center`,
        alignItems: `center`,
        mt: 3,
        color: `text`,
        fontWeight: `semibold`,
        a: { color: `text` },
      }}
    >
      
      {` `}
      <Styled.a
        aria-label="Link to the theme's GitHub repository"
        sx={{ ml: 2 }}
        href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emma"
      >
        Website
      </Styled.a>
      <div sx={{ mx: 1 }}>by</div>
      {` `}
      <Styled.a aria-label="Starco Homepage" href="https://www.starco.gr">
        Starco
      </Styled.a>
    </Flex>
  </ThemeFooter>
)

export default Footer
