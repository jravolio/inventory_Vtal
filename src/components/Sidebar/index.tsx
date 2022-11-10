import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import {ListItem,ListItemButton,ListItemIcon,ListItemText} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import Tooltip from "@mui/material/Tooltip";
import styles from "./styles.module.scss";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  fontFamily: '"Montserrat", sans-serif',
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface SidebarProps {
  tableName: string;
  handleOpenNewProjectModal: () => void;
}

export function Sidebar({ tableName,handleOpenNewProjectModal }: SidebarProps) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{backgroundColor: '#464643'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            display="flex"
            justifyContent="space-between"
            width="100vw"
          >
            {tableName}
            <a href="/">
              <img src="assets/vtalLogo.svg" width="80px" />
            </a>

            <Button
              onClick={handleOpenNewProjectModal}
              variant="contained"
              color="success"
            >
              Adicionar
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} PaperProps={{
        sx:{
          backgroundColor: '#757573'
        }
      }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            className={styles.link}
            disablePadding
            sx={{ display: "block" }}
          >
            <a href="/">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <Tooltip title="Home">
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <HomeRoundedIcon sx={{color: '#f1ff00'}} />
                  </ListItemIcon>
                </Tooltip>
                <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0, color: '#f2f2f2' }} />
              </ListItemButton>
            </a>
          </ListItem>
          <ListItem
            className={styles.link}
            disablePadding
            sx={{ display: "block" }}
          >
            <a href="/serviceAccounts">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <Tooltip title="Contas de serviço">
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <SupervisorAccountRoundedIcon sx={{color: '#f1ff00'}} />
                  </ListItemIcon>
                </Tooltip>
                <ListItemText
                  primary="Contas de serviço"
                  sx={{ opacity: open ? 1 : 0, color: '#f2f2f2'}}
                />
              </ListItemButton>
            </a>
          </ListItem>
          <ListItem
            className={styles.link}
            disablePadding
            sx={{ display: "block" }}
          >
            <a href="/projects">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <Tooltip title="Projetos">
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <TerminalRoundedIcon sx={{color: '#f1ff00'}} />
                  </ListItemIcon>
                </Tooltip>
                <ListItemText
                  primary="Projetos"
                  sx={{ opacity: open ? 1 : 0, color: '#f2f2f2' }}
                />
              </ListItemButton>
            </a>
          </ListItem>

          <ListItem
            className={styles.link}
            disablePadding
            sx={{ display: "block" }}
          >
            <a href="/servers">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <Tooltip title="Servidores">
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <DnsRoundedIcon sx={{color: '#f1ff00'}} />
                  </ListItemIcon>
                </Tooltip>
                <ListItemText
                  primary="Servidores"
                  sx={{ opacity: open ? 1 : 0, color: '#f2f2f2' }}
                />
              </ListItemButton>
            </a>
          </ListItem>
          <ListItem
            className={styles.link}
            disablePadding
            sx={{ display: "block" }}
          >
            <a href="/integrations">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <Tooltip title="Integrações">
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <AccountTreeRoundedIcon sx={{color: '#f1ff00'}} />
                  </ListItemIcon>
                </Tooltip>
                <ListItemText
                  primary="Integrações"
                  sx={{ opacity: open ? 1 : 0, color: '#f2f2f2' }}
                />
              </ListItemButton>
            </a>
          </ListItem>
          <ListItem
            className={styles.link}
            disablePadding
            sx={{ display: "block" }}
          >
            <a href="/companies">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <Tooltip title="Empresas">
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <ApartmentRoundedIcon sx={{color: '#f1ff00'}} />
                  </ListItemIcon>
                </Tooltip>
                <ListItemText
                  primary="Empresas"
                  sx={{ opacity: open ? 1 : 0, color: '#f2f2f2' }}
                />
              </ListItemButton>
            </a>
          </ListItem>
        </List>
      </Drawer>
      <DrawerHeader />
    </Box>
  );
}
