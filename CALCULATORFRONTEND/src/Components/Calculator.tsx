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
    { pointsEarned: "", totalPoints: "", category: "" },
  ]);
  const [avgGrade, setAvgGrade] = useState(0);

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
    setAvgGrade(calculation());
  };

  const addFields = () => {
    let object = {
      pointsEarned: "",
      totalPoints: "",
      category: "",
    };
    setFormFields([...formFields, object]);
  };

  const refresh = () => {
    window.location.reload();
  };

  const calculation = () => {
    let aolEarned = ["0"];
    let aolTotals = ["0"];
    let aflEarned = ["0"];
    let aflTotals = ["0"];
    for (let i = 0; i < formFields.length; i++) {
      if (formFields[i].category == ".80") {
        aolEarned.push(formFields[i].pointsEarned);
        aolTotals.push(formFields[i].totalPoints);
      } else {
        aflEarned.push(formFields[i].pointsEarned);
        aflTotals.push(formFields[i].totalPoints);
      }
    }

    // convert string[] -> number[]
    let aolEarnedNum = aolEarned.map((i) => Number(i));
    let aolTotalsNum = aolTotals.map((i) => Number(i));
    let aflEarnedNum = aflEarned.map((i) => Number(i));
    let aflTotalsNum = aflTotals.map((i) => Number(i));

    //test
    console.log(formFields);

    // send to backend right here
    console.log(aolEarnedNum);
    console.log(aolTotalsNum);
    console.log(aflEarnedNum);
    console.log(aflTotalsNum);

    // backend calculation starts here
    let aolEarnedSum = aolEarnedNum.reduce(
      (aolEarnedSum, p) => aolEarnedSum + p
    );
    console.log(aolEarnedSum); // 132.8
    let aolTotalsSum = aolTotalsNum.reduce(
      (aolTotalsSum, p) => aolTotalsSum + p
    );
    console.log(aolTotalsSum); // 136
    let aflEarnedSum = aflEarnedNum.reduce(
      (aflEarnedSum, p) => aflEarnedSum + p
    );
    console.log(aflEarnedSum); // 52.75
    let aflTotalsSum = aflTotalsNum.reduce(
      (aflTotalsSum, p) => aflTotalsSum + p
    );
    console.log(aflTotalsSum); // 64

    //console.log(aolCalculated); // 0.7811...

    //console.log(aflCalculated); // 0.1648...

    let finalGrade = 0;
    let aolCalculated = 0;
    let aflCalculated = 0;
    aolCalculated = 0.8 * (aolEarnedSum / aolTotalsSum);
    aflCalculated = 0.2 * (aflEarnedSum / aflTotalsSum);

    if (aolCalculated > 0 && aflCalculated > 0) {
      console.log("1st conditional");

      finalGrade = 100 * (aolCalculated + aflCalculated);
    } else if (aolCalculated > 0) {
      console.log("2st conditional");
      aolCalculated = aolEarnedSum / aolTotalsSum;
      finalGrade = 100 * aolCalculated;
    } else if (aflCalculated > 0) {
      console.log("3st conditional");
      aflCalculated = aflEarnedSum / aflTotalsSum;
      finalGrade = 100 * aflCalculated;
    } else {
      console.log("4st conditional");
      finalGrade = 0;
    }
    console.log("Your final grade is: " + finalGrade);

    return finalGrade;
  };

  const letter = (number: any) => {
    if (number >= 97) {
      return "A+";
    } else if (number >= 93) {
      return "A";
    } else if (number >= 90) {
      return "A-";
    } else if (number >= 87) {
      return "B+";
    } else if (number >= 83) {
      return "B";
    } else if (number >= 80) {
      return "B-";
    } else if (number >= 77) {
      return "C+";
    } else if (number >= 73) {
      return "C";
    } else if (number >= 70) {
      return "C-";
    } else if (number >= 67) {
      return "D+";
    } else if (number >= 65) {
      return "D";
    } else if (number >= 60) {
      return "D-";
    } else {
      return "F";
    }
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
              <Input bg="#E8E8E8" w="155px" borderRadius="4" />
              <Input
                bg="#E8E8E8"
                w="80px"
                name="pointsEarned"
                onChange={(event) => handleFormChange(event, index)}
                value={form.pointsEarned}
                borderRadius="4"
              />
              <Input
                bg="#E8E8E8"
                w="80px"
                name="totalPoints"
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
              <Text>{avgGrade}</Text>
            </Box>
            <Box bg="white" color="black" borderRadius="4" w="100px" h="40px">
              <Text>{letter(avgGrade)}</Text>
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Calculator;
