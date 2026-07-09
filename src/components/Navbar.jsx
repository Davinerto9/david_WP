import React, { useState } from 'react'
import { 
    Slide, useScrollTrigger, AppBar, Container, Toolbar, Typography, 
    Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useTheme, useMediaQuery 
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export default function Navbar(){
    const [mobileOpen, setMobileOpen] = useState(false)
    const theme = useTheme()
    
    // Returns true if the viewport width is smaller than the 'md' breakpoint (900px)
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    })

    const handleScroll = (id) => (e) => {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setMobileOpen(false)
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    // Array of navigation items to keep code decoupled better than individual button items.
    const navItems = [
        { label: 'Me', id: 'me' },
        { label: 'Inspirations', id: 'inspirations' },
        { label: 'Hobbies', id: 'hobbies' },
        { label: 'My Fav. Games', id: 'videoGames' },
        { label: 'My Fav. Music', id: 'music' },
        { label: 'Project Showcase', id: 'projects' },
        { label: 'Contact me', id: 'contact' },
    ]

    //Updated Navbar with the addition of a cleaner mobile support drawer and on desktop an Appbar
    return(
        <>
            <Slide direction='down' in={trigger}>
                <AppBar position='fixed' color='default' elevation={3}>
                    <Container maxWidth="lg">
                        <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
                            <Typography variant='h6' sx={{fontWeight: 'bold', fontFamily: 'Inconsolata'}} component="div">
                                David Chicué
                            </Typography>

                            {/* Mobile Hamburger Button */}
                            {isMobile ? (
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                >
                                    <MenuIcon />
                                </IconButton>
                            ) : (
                                /* Desktop Desktop Buttons Menu */
                                <Box sx={{ "& .MuiButton-root": { fontFamily: 'Mulish, sans-serif' } }}>
                                    {navItems.map((item) => (
                                        <Button 
                                            key={item.id}
                                            color="inherit" 
                                            href={`#${item.id}`} 
                                            onClick={handleScroll(item.id)}
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </Box>
                            )}
                        </Toolbar>
                    </Container>
                </AppBar>
            </Slide>

            {/* Mobile Drawer (Sidebar) Menu */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }} // Better open performance on mobile.
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250, fontFamily: 'Mulish, sans-serif' },
                }}
            >
                <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 2 }}>
                    <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold', fontFamily: 'Inconsolata' }}>
                        Menu
                    </Typography>
                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item.id} disablePadding>
                                <ListItemButton 
                                    component="a" 
                                    href={`#${item.id}`} 
                                    onClick={handleScroll(item.id)}
                                    sx={{ textAlign: 'center' }}
                                >
                                    <ListItemText 
                                        primary={item.label} 
                                        slotProps={{primary:{ style: { fontFamily: 'Mulish, sans-serif' } }}} 
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}
