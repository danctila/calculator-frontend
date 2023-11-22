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
      <Box bg="#A29165" w="490px" h="auto" mt="200px" mx="auto" p="10px">
        <HStack justifyContent="space-between">
          <Text fontSize="15">Assignment (opt.)</Text>
          <Text fontSize="15">Points earned</Text>
          <Text fontSize="15">Total points</Text>
          <Text fontSize="15">Category</Text>
        </HStack>

        {formFields.map((form, index) => {
          return (
            <HStack key={index} pb="5px">
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
                w="200px"
                name="pointsEarned"
                placeholder="Points earned"
                onChange={(event) => handleFormChange(event, index)}
                value={form.pointsEarned}
              />
              <Input
                bg="#E8E8E8"
                w="200px"
                name="totalPoints"
                placeholder="Total points"
                onChange={(event) => handleFormChange(event, index)}
                value={form.totalPoints}
              />
              <Select
                bg="#E8E8E8"
                w="150px"
                name="category"
                onChange={(event) => handleFormChange(event, index)}
              >
                <option value="1.20">AFL 20%</option>
                <option value="1.80">AOL 80%</option>
              </Select>
            </HStack>
          );
        })}

        <Button onClick={addFields}>Add more..</Button>
        <Button onClick={submit}>Submit..</Button>
      </Box>
    </>
  );
};

export default Calculator;
