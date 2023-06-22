import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../redux/authReducer/action";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (email && mobile && password) {
      let payload = {
        email,
        mobile,
        password,
      };
      dispatch(signup(payload));
    }
  };
  const isEmailError = email === "";
  const isMobileError = mobile === "";
  const isPasswordError = password === "";
  return (
    <Flex
      w={"100%"}
      bgColor={`#081420`}
      h={`100vh`}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        color={`white`}
        w={"30%"}
        m={"auto"}
        height={"70vh"}
        border={"1px solid lightgray"}
        p={"0.5rem"}
        borderRadius={`10px`}
      >
        <FormControl isInvalid={isEmailError}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isEmailError ? (
            ""
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={isMobileError}>
          <FormLabel>Mobile</FormLabel>
          <Input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          {!isEmailError ? (
            ""
          ) : (
            <FormErrorMessage>Mobile is required.</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={isPasswordError}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isEmailError ? (
            ""
          ) : (
            <FormErrorMessage>Password is required.</FormErrorMessage>
          )}
        </FormControl>
        <Button
          w={`100%`}
          bgColor={`#2ec834`}
          color={`white`}
          mt={`1rem`}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Flex>
  );
};

export default SignupPage;
