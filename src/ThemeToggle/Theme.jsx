import React from 'react'
import useTheme from './Themes'

const Theme = () => {
    const {themBtn,onDarkMode,onLightMode}=useTheme();
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            onDarkMode()
        } else {
            onLightMode()
        }
    }
  return (
    <div className={`${themBtn}`}> 
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themBtn=== "dark"}
            />
    </div>
  )
}

export default Theme