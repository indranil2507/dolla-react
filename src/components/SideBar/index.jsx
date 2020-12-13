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
const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}> 
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
            <SidebarMenu>
                <SideBarlink to="about" onClick={toggle}>
                    About
                </SideBarlink>
                <SideBarlink to="discover" onClick={toggle}>
                    Discover
                </SideBarlink>
                <SideBarlink to="services" onClick={toggle}>
                    Services
                </SideBarlink>
                <SideBarlink to="sign-up" onClick={toggle}>
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
