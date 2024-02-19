import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;

    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLoginSignupToggle = () => {
    setIsLogin((prevState) => !prevState);
  };

  const handleLoginSignup = () => {
    navigate("/auth");
  };

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor="pointer" alt="Instagram" />
          <Input
            placeholder="Email"
            type="email"
            fontSize={14}
            name="email"
            value={userDetails.email}
            onChange={handleUserDetailsChange}
          />
          <Input
            placeholder="Password"
            type="password"
            fontSize={14}
            name="password"
            value={userDetails.password}
            onChange={handleUserDetailsChange}
          />

          {!isLogin && (
            <Input
              placeholder="Confirm Password"
              type="password"
              fontSize={14}
              name="confirmPassword"
              value={userDetails.confirmPassword}
              onChange={handleUserDetailsChange}
            />
          )}

          <Button
            width="full"
            colorScheme="blue"
            size="sm"
            fontSize={14}
            onClick={handleLoginSignup}
          >
            {isLogin ? "Log in" : "Sign up"}
          </Button>

          <Flex
            justifyContent="center"
            alignItems="center"
            my={4}
            gap={1}
            w="full"
          >
            <Box flex={2} h={"1px"} bg="gray.400" />
            <Text mx={1} color="white">
              OR
            </Text>
            <Box flex={2} h={"1px"} bg="gray.400" />
          </Flex>

          <Flex justifyContent="center" alignItems="center" cursor="pointer">
            <Image src="/google.png" w={5} alt="Google" />
            <Text mx={2} color={"blue.500"}>
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex justifyContent="center" alignItems="center">
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={handleLoginSignupToggle}
            color="blue.500"
            cursor="pointer"
          >
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
