import {
  Box,
  Button,
  Center,
  HStack,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

const Calculator = () => {
  const [formFields, setFormFields] = useState([
    { assignment: "", pointsEarned: "", totalPoints: "", category: "" },
  ]);

  const handleFormChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => {
    let data: any = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      assignment: "",
      pointsEarned: "",
      totalPoints: "",
      category: "",
    };
    setFormFields([...formFields, object]);
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <>
      <Box bg="#A29165" w="470px" h="auto" mt="200px" mx="auto" p="10px">
        <HStack>
          <Text fontSize="15" ml="3px">
            Assignment (opt.)
          </Text>
          <Text fontSize="15" ml="43px">
            Points earned
          </Text>
          <Text fontSize="15" ml="5px">
            Total points
          </Text>
          <Text fontSize="15" ml="13px">
            Category
          </Text>
        </HStack>

        {formFields.map((form, index) => {
          return (
            <HStack key={index} pb="5px" spacing="20px">
              <Input
                bg="#E8E8E8"
                w="155px"
                name="assignment"
                placeholder="Assignment"
                onChange={(event) => handleFormChange(event, index)}
                value={form.assignment}
                borderRadius="4"
              />
              <Input
                bg="#E8E8E8"
                w="80px"
                name="pointsEarned"
                placeholder="Points earned"
                onChange={(event) => handleFormChange(event, index)}
                value={form.pointsEarned}
                borderRadius="4"
              />
              <Input
                bg="#E8E8E8"
                w="80px"
                name="totalPoints"
                placeholder="Total points"
                onChange={(event) => handleFormChange(event, index)}
                value={form.totalPoints}
                borderRadius="4"
              />
              <Select
                bg="#E8E8E8"
                w="80px"
                name="category"
                onChange={(event) => handleFormChange(event, index)}
                borderRadius="4"
              >
                <option value=""></option>
                <option value=".20">AFL 20%</option>
                <option value=".80">AOL 80%</option>
              </Select>
            </HStack>
          );
        })}
        <Center>
          <Button onClick={addFields} w="250px" bg="#E8E8E8">
            Add grade +
          </Button>
        </Center>
        <HStack paddingTop="30px" mx="45px" justifyContent="space-between">
          <Button
            onClick={submit}
            bg="#214D7D"
            color="white"
            _hover={{ color: "white" }}
            _active={{ background: "#214D7D", color: "#A29165" }}
          >
            = Calculate
          </Button>
          <Button
            onClick={refresh}
            bg="#515C67"
            color="white"
            _hover={{ bg: "red" }}
          >
            X Reset
          </Button>
        </HStack>
        <Box bg="#A29165" pt="8px" mx="45px">
          <Text fontSize="20" fontWeight="semi bold" py="5px">
            Average grade:
          </Text>
          <HStack spacing="20px">
            <Box bg="white" color="black" borderRadius="4" w="200px" h="40px">
              hello
            </Box>
            <Box bg="white" color="black" borderRadius="4" w="100px" h="40px">
              meow
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Calculator;
