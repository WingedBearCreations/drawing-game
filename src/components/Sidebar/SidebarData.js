import React from 'react'

// Material Icons
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SettingsIcon from '@mui/icons-material/Settings';


export const SidebarData = {
    Home: [
        {
            title: "ホーム",
            icon: <HomeIcon />,
            link: "/"
        },
        {
            title: "プロフィール",
            icon: <PersonIcon />,
            link: "/profile"
        },
        {
            title: "フレンド",
            icon: <SupervisorAccountIcon />,
            link: "/friend"
        },
        {
            title: "設定",
            icon: <SettingsIcon />,
            link: "/setting"
        },
    ]
};