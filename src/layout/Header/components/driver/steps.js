/**
 * 配置引导功能内容
 * @param {*} i18n 
 * @returns 
 */
export const steps = (i18n) => [
    {
        element: '#guide',
        popover: {
            title: i18n('driver.guideBtn'),
            description: 'Body of the popover',
            position: 'left'
        }
    },
    {
        element: '#hamburger',
        popover: {
            title: i18n('driver.hamburgerBtn'),
            description: 'Body of the popover',
            position: 'bottom'
        }
    },
    {
        element: '#fullscreen',
        popover: {
            title: i18n('driver.fullScreen'),
            description: 'Body of the popover',
            position: 'left'
        }
    }
]