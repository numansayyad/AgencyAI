import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggle = ({ theme, setTheme }) => {

    // This effect runs only once when the component first loads
  useEffect(() => {
  // Check if the user's system is set to dark mode
  const preferDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;

  // If no theme is stored, use system preference
  if (!localStorage.getItem('theme')) {
    setTheme(preferDarkMode ? 'dark' : 'light');
  }
}, []); // Runs only once on mount


    // This effect runs whenever the theme changes
    // It updates the page styling and saves the theme preference
    useEffect(() => {

        // Add or remove 'dark' class from the root HTML element
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')  // Enable dark mode styling
        }
        else {
            document.documentElement.classList.remove('dark')  // Enable light mode styling

        }
        
        // Save the theme choice to browser memory so it persists after refresh
        localStorage.setItem('theme', theme)

    }, [theme])  // Re-run this effect only when theme changes




    return (
        <>
            <button>
                {theme === 'dark' ? (
                    <img onClick={() => setTheme('light')} src={assets.sun_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full' />

                ) : (
                    <img onClick={() => setTheme('dark')} src={assets.moon_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full' />



                )}

            </button>
        </>
    )
}

export default ThemeToggle
