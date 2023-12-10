import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  HStack,
  Input,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

const Calculator = () => {
  const [formFields, setFormFields] = useState([
    { pointsEarned: "", totalPoints: "", category: "" },
  ]);
  const [avgGrade, setAvgGrade] = useState(0);
  const [averageTip, setAverageTip] = useState(false);
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
    let finalGrade = 0;
    for (let i = 0; i < formFields.length; i++) {
      let earned = formFields[i].pointsEarned as unknown as number;
      let total = formFields[i].totalPoints as unknown as number;
      let category = formFields[i].category as unknown as number;

      finalGrade += 100 * (earned / total) * category;
    }

    return finalGrade;
  };

  const letter = (number: any) => {
    if (number >= 97) return "A+";
    else if (number >= 93) return "A";
    else if (number >= 90) return "A-";
    else if (number >= 87) return "B+";
    else if (number >= 83) return "B";
    else if (number >= 80) return "B-";
    else if (number >= 77) return "C+";
    else if (number >= 73) return "C";
    else if (number >= 70) return "C-";
    else if (number >= 67) return "D+";
    else if (number >= 63) return "D";
    else if (number >= 60) return "D-";
    else return "F";
  };

  return (
    <>
      <Box bg="#A29165" w="470px" h="auto" mx="auto" mt="10px" p="10px">
        <HStack>
          <Text fontSize="15" ml="3px">
            Assignment (opt.)
          </Text>
          <Text fontSize="15" ml="25px">
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
              <Input
                bg="#E8E8E8"
                w="80px"
                name="category"
                onChange={(event) => handleFormChange(event, index)}
                value={form.category}
                borderRadius="4"
              />
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
          <HStack>
            <Tooltip
              bg="#989898"
              color="#214D7D"
              hasArrow
              label="Calculated grade before PowerSchool rounds to whole number"
              placement="top-start"
              isOpen={averageTip}
            >
              <InfoOutlineIcon
                onMouseEnter={() => setAverageTip(true)}
                onMouseLeave={() => setAverageTip(false)}
                onClick={() => setAverageTip(!averageTip)}
              />
            </Tooltip>
            <Text fontSize="20" fontWeight="semi bold" py="5px">
              Average grade:
            </Text>
          </HStack>
          <HStack spacing="20px">
            <Box bg="#E8E8E8" color="black" borderRadius="4" w="200px" h="40px">
              <Text fontSize="24px">{avgGrade.toFixed(4)}</Text>
            </Box>
            <Box bg="#E8E8E8" color="black" borderRadius="4" w="100px" h="40px">
              <Text fontSize="24px">{letter(avgGrade.toFixed(4))}</Text>
            </Box>
          </HStack>
        </Box>
        <Box bg="#A29165" pt="8px" mx="45px">
          <Text fontSize="20" fontWeight="semi bold" py="5px">
            Powerschool grade:
          </Text>
          <HStack spacing="20px">
            <Box bg="#E8E8E8" color="black" borderRadius="4" w="200px" h="40px">
              <Text fontSize="24px">{avgGrade.toFixed()}</Text>
            </Box>
            <Box bg="#E8E8E8" color="black" borderRadius="4" w="100px" h="40px">
              <Text fontSize="24px">{letter(avgGrade.toFixed())}</Text>
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Calculator;
