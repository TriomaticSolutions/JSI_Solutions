import React from "react";
import {
  Box,
  Flex,
  chakra,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Button,
  VStack,
  CloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import GroupsIcon from "@mui/icons-material/Groups";
import MenuIcon from "@mui/icons-material/Menu";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import GroupIcon from "@mui/icons-material/Group";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ArticleIcon from "@mui/icons-material/Article";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import { useNavigate } from "react-router-dom";
import logo2 from "../Assets/Images/logo5.png";

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const navigate = useNavigate();

  return (
    <chakra.header
      bg={bg}
      px={{
        base: 2,
        sm: 3,
        lg: 4,
      }}
      py={4}
      shadow="md"
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: "1",
      }}
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex>
          <img
            onClick={() => navigate("/")}
            src={logo2}
            alt="JSI"
            style={{
              height: "60px",
            }}
          />
        </Flex>

        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            color="brand.500"
            display={{
              base: "none",
              md: "inline-flex",
            }}
          >
            <Menu>
              <MenuButton
                _hover={{ bg: "gray.50" }}
                bg={"transparent"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                About
              </MenuButton>

              <MenuList>
                <MenuItem
                  onClick={() => navigate("/about/expertise")}
                  icon={<AutoGraphIcon />}
                >
                  Expertise
                </MenuItem>
                <MenuItem
                  onClick={() => navigate("/about/team")}
                  icon={<GroupsIcon />}
                >
                  Team
                </MenuItem>
                <MenuItem
                  onClick={() => navigate("/about/sponsors")}
                  icon={<GroupIcon />}
                >
                  Sponsors
                </MenuItem>
                <MenuItem
                  onClick={() => navigate("/about/press")}
                  icon={<CameraEnhanceIcon />}
                >
                  Press Coverage
                </MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                _hover={{ bg: "gray.50" }}
                bg={"transparent"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Services
              </MenuButton>

              <MenuList>
                <MenuItem
                  onClick={() => navigate("/services/process")}
                  icon={<AccountTreeIcon />}
                >
                  BVD Process
                </MenuItem>
                <MenuItem
                  onClick={() => navigate("/services/visa")}
                  icon={<ArticleIcon />}
                >
                  EB-3 Unskilled Visa
                </MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                _hover={{ bg: "gray.50" }}
                bg={"transparent"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Success Stories
              </MenuButton>

              <MenuList>
                <MenuItem
                  onClick={() => navigate("/stories/testimonials")}
                  icon={<QueryStatsIcon />}
                >
                  Testimonials
                </MenuItem>
                <MenuItem
                  onClick={() => navigate("/stories/cases")}
                  icon={<FormatQuoteIcon />}
                >
                  Case Studies
                </MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                _hover={{ bg: "gray.50" }}
                bg={"transparent"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Recources
              </MenuButton>

              <MenuList>
                <MenuItem
                  onClick={() => navigate("/resources/blog")}
                  icon={<ContactSupportIcon />}
                >
                  Blog
                </MenuItem>
                <MenuItem
                  onClick={() => navigate("/resources/FAQ")}
                  icon={<HistoryEduIcon />}
                >
                  FAQ
                </MenuItem>
              </MenuList>
            </Menu>

            <Button
              onClick={() => navigate("/partnership")}
              _hover={{ bg: "gray.50" }}
              bg={"transparent"}
            >
              Partnership
            </Button>

            <Button _hover={{ bg: "gray.50" }} bg={"transparent"}>
              Sign up
            </Button>

            <Button _hover={{ bg: "gray.50" }} bg={"transparent"}>
              Login
            </Button>
          </HStack>

          <Box
            display={{
              base: "inline-flex",
              md: "none",
            }}
          >
            <IconButton
              display={{
                base: "flex",
                md: "none",
              }}
              aria-label="Open menu"
              fontSize="20px"
              color="gray.800"
              _dark={{
                color: "inherit",
              }}
              variant="ghost"
              icon={<MenuIcon />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <CloseButton
                aria-label="Close menu"
                onClick={mobileNav.onClose}
              />

              <Menu>
                <MenuButton
                  _hover={{ bg: "gray.50" }}
                  bg={"transparent"}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  About
                </MenuButton>

                <MenuList>
                  <MenuItem
                    onClick={() => navigate("/about/expertise")}
                    icon={<AutoGraphIcon />}
                  >
                    Expertise
                  </MenuItem>
                  <MenuItem
                    onClick={() => navigate("/about/team")}
                    icon={<AutoGraphIcon />}
                  >
                    Team
                  </MenuItem>
                  <MenuItem
                    onClick={() => navigate("/about/sponsors")}
                    icon={<CameraEnhanceIcon />}
                  >
                    Sponsors
                  </MenuItem>
                  <MenuItem
                    onClick={() => navigate("/about/press")}
                    icon={<CameraEnhanceIcon />}
                  >
                    Press Coverage
                  </MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  _hover={{ bg: "gray.50" }}
                  bg={"transparent"}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Services
                </MenuButton>

                <MenuList>
                  <MenuItem
                    onClick={() => navigate("/services/process")}
                    icon={<AccountTreeIcon />}
                  >
                    BVD Process
                  </MenuItem>
                  <MenuItem
                    onClick={() => navigate("/services/visa")}
                    icon={<ArticleIcon />}
                  >
                    EB-3 Unskilled Visa
                  </MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  _hover={{ bg: "gray.50" }}
                  bg={"transparent"}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Success Stories
                </MenuButton>

                <MenuList>
                  <MenuItem
                    onClick={() => navigate("/stories/testimonials")}
                    icon={<QueryStatsIcon />}
                  >
                    Testimonials
                  </MenuItem>
                  <MenuItem
                    onClick={() => navigate("/stories/cases")}
                    icon={<FormatQuoteIcon />}
                  >
                    Case Studies
                  </MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  _hover={{ bg: "gray.50" }}
                  bg={"transparent"}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Recources
                </MenuButton>

                <MenuList>
                  <MenuItem
                    onClick={() => navigate("/resources/blog")}
                    icon={<ContactSupportIcon />}
                  >
                    Blog
                  </MenuItem>
                  <MenuItem
                    onClick={() => navigate("/resources/FAQ")}
                    icon={<HistoryEduIcon />}
                  >
                    FAQ
                  </MenuItem>
                </MenuList>
              </Menu>

              <Button
                onClick={() => navigate("/partnership")}
                _hover={{ bg: "gray.50" }}
                bg={"transparent"}
              >
                Partnership
              </Button>

              <Button _hover={{ bg: "gray.50" }} bg={"transparent"}>
                Sign up
              </Button>

              <Button _hover={{ bg: "gray.50" }} bg={"transparent"}>
                Login
              </Button>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </chakra.header>
  );
};

export default Navbar;
