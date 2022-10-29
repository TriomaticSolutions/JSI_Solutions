import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

import {
  FiTrendingUp,
  FiMenu,
  FiDollarSign,
  FiBook,
  FiLogOut,
  FiHome,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/Images/logo4.png";

function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />

      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Flex>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const navigate = useNavigate();

  const LinkItems = [
    {
      name: "Home Page",
      icon: FiHome,
      click: () => {
        navigate("/dashboard");
      },
    },
    {
      name: "Survey Form",
      icon: FiBook,
      click: () => {
        navigate("/dashboard/survey");
      },
    },
    {
      name: "Your Progess",
      icon: FiTrendingUp,
      click: () => {
        navigate("/dashboard/progress");
      },
    },
    {
      name: "Payment",
      icon: FiDollarSign,
      click: () => {
        navigate("/dashboard/payment");
      },
    },
    {
      name: "Logout",
      icon: FiLogOut,
      click: () => {
        navigate("/");
      },
    },
  ];

  return (
    <Box
      bg={"whitesmoke"}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <img
          src={logo}
          alt=""
          style={{
            height: "50px",
          }}
        />

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem onClick={link.click} key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 36 }}
      px={{ base: 2, md: 16 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};

export default SimpleSidebar;
