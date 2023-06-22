import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteSingTodo, getTodos } from "../redux/appReducer/action";
import { Link, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [todoInput, setTodoInput] = useState("");
  const todos = useSelector((store) => store.appReducer.todos);
  const dispatch = useDispatch();
const navigate=useNavigate()
  const handleSubmit = () => {
    if (todoInput) {
      let payload = {
        todo: todoInput,
      };
      dispatch(addTodo(payload));
    }
  };

  const handleDelete=(id)=>{
    dispatch(deleteSingTodo(id))
  }
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch, todos.length]);
  return (
    <VStack w={"100%"} bgColor={`#081420`} minH={`100vh`}>
      <Flex
        color={`white`}
        w={"50%"}
        m={"auto"}
        p={"0.5rem"}
        borderRadius={`10px`}
        justifyContent={`center`}
        alignItems={`center`}
        border={`1px solid lightgray`}
      >
        <BsSearch fontSize={`1rem`} />
        <Input placeholder="Search Todo" border={`none`} outline={`none`} />
      </Flex>

      {todos &&
        todos?.map((e) => (
          <Flex
            color={`white`}
            w={"50%"}
            m={"auto"}
            p={"0.5rem"}
            borderRadius={`10px`}
            key={e._id}
            justifyContent="space-between"
          >
            <Box>
              <Heading size={`md`}>{e.todo}</Heading>
              <Text>{e.time}</Text>
            </Box>
            <Flex gap={"1rem"}>
              <TiDelete fontSize={`1.5rem`} onClick={()=>handleDelete(e._id)}/>
              
              <AiFillEdit fontSize={`1.5rem`} onClick={()=>navigate(`/dashboard/${e._id}`)}/>
              
            </Flex>
          </Flex>
        ))}
      <Flex
        color={`white`}
        w={"50%"}
        m={"auto"}
        p={"0.5rem"}
        borderRadius={`10px`}
      >
        <Input
          placeholder="Enter Todo"
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <Button onClick={handleSubmit}>+</Button>
      </Flex>
    </VStack>
  );
};

export default Dashboard;
