import { Box, Button, HStack, Input, Select, Text } from "@chakra-ui/react";
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
              />
              <Input
                bg="#E8E8E8"
                w="80px"
                name="pointsEarned"
                placeholder="Points earned"
                onChange={(event) => handleFormChange(event, index)}
                value={form.pointsEarned}
              />
              <Input
                bg="#E8E8E8"
                w="80px"
                name="totalPoints"
                placeholder="Total points"
                onChange={(event) => handleFormChange(event, index)}
                value={form.totalPoints}
              />
              <Select
                bg="#E8E8E8"
                w="80px"
                name="category"
                onChange={(event) => handleFormChange(event, index)}
              >
                <option value=""></option>
                <option value=".20">AFL 20%</option>
                <option value=".80">AOL 80%</option>
              </Select>
            </HStack>
          );
        })}

        <Button onClick={addFields}>Add more..</Button>
      </Box>
      <Button onClick={submit}>Submit..</Button>
    </>
  );
};

export default Calculator;
