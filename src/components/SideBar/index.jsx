import React from 'react'
import {
    SidebarContainer,
    CloseIcon,
    Icon,
    SideBarlink,
    SidebarWrapper,
    SideBtnWrap,
    SidebarMenu,
    SidebarRoute

} from './SidebarElements'
const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
            <SidebarMenu>
                <SideBarlink to="about">
                    About
                </SideBarlink>
                <SideBarlink to="discover">
                    Discover
                </SideBarlink>
                <SideBarlink to="services">
                    Services
                </SideBarlink>
                <SideBarlink to="sign-up">
                    Sign-up
                </SideBarlink>
                <SideBtnWrap>
                    <SidebarRoute>
                        Sign-In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarMenu>
            </SidebarWrapper>
              
        </SidebarContainer>

            
       
    )
}

export default Sidebar
