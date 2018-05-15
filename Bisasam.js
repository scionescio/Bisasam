import React from 'react'

const styles = {
    container: {
        // needed as this will be shown in the fullscreen mode
        // which has white background as default
        background: ({ theme }) => theme.color.special.background,
        margin: [0, -24, 0, -48],
        padding: [0, 24, 24],
        minHeight: '100%',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    header: {
        display: 'flex',
    },
    title: {
        flex: 1,
    },
    button: {
        margin: [24, 0],
        '& button': {
            backgroundColor: 'white',
        },
    },
}

