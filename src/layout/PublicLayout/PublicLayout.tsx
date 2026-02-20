import { darkTheme, lightTheme } from '@theme/theme'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import * as S from './PublicLayout.styled'

export const PublicLayout = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <S.SectionBackground>
        <Navbar
          theme={theme}
          onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        />
        <Outlet />
        <Footer />
      </S.SectionBackground>
    </ThemeProvider>
  )
}
