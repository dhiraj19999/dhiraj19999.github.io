import { Button, WrapItem, Heading } from "@chakra-ui/react";

import { Wrap } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Image, Text, Box } from "@chakra-ui/react";
import styles from "../Componentst/MainPa.module.css";
import men from "../Images/men.png";
import { useState, useEffect } from "react";
import women from "../Images/women.png";
import login from "../Images/Login.png";
import address from "../Images/address.png";
import news1 from "../Images/news1.png";
import news2 from "../Images/news2.png";
import news3 from "../Images/news3.png";
import news4 from "../Images/news4.png";
import news5 from "../Images/news5.png";
import news6 from "../Images/news6.png";
import tra2 from "../Images/movix2.png";
import tra1 from "../Images/movix1.png";
import tra3 from "../Images/movix3.png";
import tra4 from "../Images/movix4.png";
import tra5 from "../Images/movix5.png";
import tra6 from "../Images/movix6.png";
import sce1 from "../Images/meetup1.png";
import sce2 from "../Images/meetup2.png";
import sce3 from "../Images/meetup3.png";
import sce4 from "../Images/meetup4.png";
import sce5 from "../Images/meetup5.png";
import redux from "../Images/redux.png";
import sce6 from "../Images/sce6.png";
import scss from "../Images/scss2.png";
import foodi1 from "../Images/FOODI1.png";
import foodi2 from "../Images/FOODI2.png";
import foodi3 from "../Images/FOODI3.png";
import foodi4 from "../Images/FOODI4.png";
import foodi5 from "../Images/FOODI5.png";
import foodi6 from "../Images/FOODI6.png";
import foodi7 from "../Images/FOODI7.png";
import foodi8 from "../Images/FOODI8.png";
import foodi9 from "../Images/FOODI9.png";
import foodi10 from "../Images/FOODI10.png";
import Aos from "aos";
import { SimpleGrid } from "@chakra-ui/react";
function Project() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  let sce = [sce1, sce2, sce3, sce4, sce5, "jj"];
  let arr = [men, women, login, address, "hj"];
  let news = [news1, news2, news3, news4, news5, news6, "kkk"];
  let tra = [tra1, tra2, tra3, tra4, tra5, tra6, "jjj"];
  let foodi = [
    foodi1,
    foodi2,
    foodi3,
    foodi4,
    foodi5,
    foodi6,
    foodi7,
    foodi8,
    foodi9,
    foodi10,
    "f",
  ];
  if (count5 == 10) {
    setCount5((prevCount5) => prevCount5 - 10);
  }
  if (count == 4) {
    setCount((prevCount) => prevCount - 4);
  }

  if (count2 == 6) {
    setCount2((prevCount2) => prevCount2 - 6);
  }

  if (count3 == 6) {
    setCount3((prevCount3) => prevCount3 - 6);
  }

  if (count4 == 5) {
    setCount4((prevCount4) => prevCount4 - 5);
  }

  let html =
    "https://bzhaoportfolio.netlify.app/static/media/html.2ba4fabc69a89a8f71e6.png";
  let css =
    "https://bzhaoportfolio.netlify.app/static/media/css.69a82c2d9e45c933a9cb.png";
  let js =
    "https://bzhaoportfolio.netlify.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png";
  let react =
    "https://bzhaoportfolio.netlify.app/static/media/react.0cf951a69d8e58f83f9d.png";

  //

  let chakra =
    "https://img.icons8.com/fluency-systems-filled/154/chakra-ui.png";

  useEffect(() => {
    Aos.init({ duration: 4000 });
  }, []);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    const ids = setInterval(() => {
      setCount2((prevCount2) => prevCount2 + 1);
    }, 2000);

    return () => {
      clearInterval(ids);
    };
  }, []);
  useEffect(() => {
    const ids = setInterval(() => {
      setCount5((prevCount5) => prevCount5 + 1);
    }, 2000);

    return () => {
      clearInterval(ids);
    };
  }, []);

  useEffect(() => {
    const idss = setInterval(() => {
      setCount4((prevCount4) => prevCount4 + 1);
    }, 2000);

    return () => {
      clearInterval(idss);
    };
  }, []);

  useEffect(() => {
    const id3 = setInterval(() => {
      setCount3((prevCount3) => prevCount3 + 1);
    }, 2000);

    return () => {
      clearInterval(id3);
    };
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Box
      h="900px"
      mt={{ lg: "150px", md: "100px", sm: "100px", base: "100px" }}
    >
      <Heading
        mb="100px"
        ml="10px"
        fontWeight={700}
        fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl" }}
        lineHeight={"110%"}
      >
        My Projects
      </Heading>

      <Wrap spacing="30px" justify="center">
        <SimpleGrid
          spacing="30px"
          columns={{ xl: 2, lg: 2, md: 1, sm: 1, base: 1 }}
        >
          <WrapItem
            className={styles.profirst1}
            w={{ lg: "450px", md: "450px", base: "310px", sm: "450px" }}
            style={{ borderRadius: "6px" }}
            height={{ lg: "640px", md: "640px", sm: "640px", base: "600px" }}
          >
            <Center display={"block"}>
              <WrapItem
                ml={{ lg: "50px", md: "50px", sm: "50px", base: "24px" }}
                mt="30px"
                className={styles.profirst1}
                w={{ lg: "350px", md: "350px", base: "260px", sm: "350px" }}
                h={{ lg: "320px", md: "320px", base: "250px", sm: "320px" }}
                style={{ borderRadius: "6px" }}
              >
                <Center display={"block"}>
                  <Image
                    borderRadius={"10px"}
                    w={{ lg: "330px", md: "330px", base: "240px", sm: "330px" }}
                    fit="cover"
                    h={{ lg: "300px", md: "300px", base: "230px", sm: "300px" }}
                    mt="10px"
                    ml="10px"
                    src={tra[count3]}
                  />

                  <Text
                    fontSize="28px"
                    fontWeight="bold"
                    mt="30px"
                    ml={{
                      lg: "-50px",
                      base: "-25px",
                      sm: "-50px",
                      md: "-50px",
                    }}
                  >
                    MOVIX
                  </Text>

                  <Center>
                    <Image
                      src={html}
                      w="40px"
                      mt="20px"
                      ml={{
                        lg: "-45px",
                        md: "-35px",
                        sm: "-45px",
                        base: "-16px",
                      }}
                    />
                    <Image
                      src={redux}
                      w="40px"
                      mt="20px"
                      ml={{ lg: "30px", md: "30px", sm: "50", base: "10px" }}
                    />
                    <Image
                      src={js}
                      w="40px"
                      mt="20px"
                      ml={{ lg: "30px", md: "30px", sm: "50", base: "10px" }}
                      borderRadius={"10px"}
                    />
                    <Image
                      w="40px"
                      mt="20px"
                      ml={{ lg: "30px", md: "30px", sm: "30", base: "10px" }}
                      src="https://img.icons8.com/external-others-inmotus-design/2x/external-API-vkontakte-others-inmotus-design-2.png"
                    />
                    <Image
                      w="40px"
                      mt="20px"
                      ml={{ lg: "30px", md: "30px", sm: "30", base: "10px" }}
                      src={react}
                    />
                    <Image
                      w="40px"
                      mt="20px"
                      ml={{ lg: "30px", md: "30px", sm: "30", base: "10px" }}
                      src={scss}
                    />
                  </Center>

                  <Text
                    mt="10px"
                    ml={{
                      lg: "-40px",
                      md: "-40px",
                      sm: "-40px",
                      base: "-16px",
                    }}
                    fontWeight={"bold"}
                    fontSize={{
                      lg: "14px",
                      md: "14px",
                      sm: "14px",
                      base: "12px",
                    }}
                    lineHeight={"20px"}
                    width={{
                      lg: "437px",
                      md: "437px",
                      sm: "437px",
                      base: "300px",
                    }}
                  >
                    Movix is an Movie Search website for Movie and Web series
                    Reviews where you can check cast and other things of latest
                    movies and web series, It's Individual project, Search,
                    Sorting, Select Geners functionality are developed
                  </Text>

                  <Center>
                    <a href="https://movix-main-chi.vercel.app/" target="blank">
                      {" "}
                      <Button
                        _hover={{ bg: "black", color: "pink" }}
                        position={""}
                        bg="purple.600"
                        w="100px"
                        ml={{
                          lg: "-50px",
                          md: "-50px",
                          sm: "-50px",
                          base: "-10px",
                        }}
                        mt="15px"
                      >
                        Live
                      </Button>{" "}
                    </a>
                    <a
                      href="https://github.com/dhiraj19999/Movie-app"
                      target="blank"
                    >
                      {" "}
                      <Button
                        _hover={{ bg: "black", color: "pink" }}
                        position={""}
                        bg="purple.600"
                        w="100px"
                        ml="30px"
                        mt="15px"
                      >
                        Git
                      </Button>
                    </a>
                  </Center>
                </Center>
              </WrapItem>
            </Center>
          </WrapItem>

          <WrapItem
            className={styles.profirst1}
            w={{ lg: "450px", md: "450px", base: "310px", sm: "450px" }}
            style={{ borderRadius: "6px" }}
            height={{ lg: "640px", md: "640px", sm: "640px", base: "600px" }}
          >
            <Center display={"block"}>
              <WrapItem
                ml={{ lg: "50px", md: "50px", sm: "50px", base: "24px" }}
                mt="30px"
                className={styles.profirst1}
                w={{ lg: "350px", md: "350px", base: "260px", sm: "350px" }}
                h={{ lg: "320px", md: "320px", base: "250px", sm: "320px" }}
                style={{ borderRadius: "6px" }}
              >
                <Center display={"block"}>
                  <Image
                    borderRadius={"10px"}
                    w={{ lg: "330px", md: "330px", base: "240px", sm: "330px" }}
                    fit="cover"
                    h={{ lg: "300px", md: "300px", base: "230px", sm: "300px" }}
                    mt="10px"
                    ml="10px"
                    src={foodi[count5]}
                  />

                  <Text
                    fontSize="28px"
                    fontWeight="bold"
                    mt="30px"
                    ml={{
                      lg: "-50px",
                      base: "-23px",
                      sm: "-50px",
                      md: "-50px",
                    }}
                  >
                    FOODI APP
                  </Text>

                  <Center>
                    <Image
                      src={html}
                      w="40px"
                      mt="20px"
                      ml={{
                        lg: "-45px",
                        md: "-45px",
                        sm: "-45px",
                        base: "-22px",
                      }}
                      mr={{ xl: "8px", lg: "8px" }}
                      borderRadius={"10px"}
                      height={{
                        sm: "27px",
                        base: "27px",
                        lg: "42px",
                        xl: "42px",
                      }}
                    />
                    <Image
                      src={css}
                      w="40px"
                      mt="20px"
                      mr={{ xl: "8px", lg: "8px" }}
                      borderRadius={"10px"}
                      height={{
                        sm: "27px",
                        base: "27px",
                        lg: "42px",
                        xl: "42px",
                      }}
                    />
                    <Image
                      src={js}
                      w="40px"
                      mt="20px"
                      mr={{ xl: "8px", lg: "8px" }}
                      borderRadius={"10px"}
                      height={{
                        sm: "27px",
                        base: "27px",
                        lg: "42px",
                        xl: "42px",
                      }}
                    />
                    <Image
                      src={react}
                      w="40px"
                      mt="20px"
                      mr={{ xl: "8px", lg: "8px" }}
                      borderRadius={"10px"}
                      height={{
                        sm: "27px",
                        base: "27px",
                        lg: "42px",
                        xl: "42px",
                      }}
                    />
                    <Image
                      src={
                        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png"
                      }
                      w="40px"
                      mt="20px"
                      mr={{ xl: "8px", lg: "8px" }}
                      borderRadius={"10px"}
                      height={{
                        sm: "27px",
                        base: "27px",
                        lg: "42px",
                        xl: "42px",
                      }}
                    />
                    <Image
                      src={
                        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.svg"
                      }
                      w="40px"
                      mt="20px"
                      mr={{ xl: "8px", lg: "8px" }}
                      borderRadius={"10px"}
                      height={{
                        sm: "27px",
                        base: "27px",
                        lg: "42px",
                        xl: "42px",
                      }}
                    />
                    <Image
                      src={
                        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.svg"
                      }
                      w="40px"
                      mt="20px"
                      mr={{ xl: "5px", lg: "5px" }}
                      borderRadius={"10px"}
                      height={{
                        sm: "22px",
                        base: "22px",
                        lg: "42px",
                        xl: "42px",
                      }}
                    />
                    <Image
                      src={
                        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-black-icon.svg"
                      }
                      w="40px"
                      mt="20px"
                      borderRadius={"10px"}
                      mr={{ xl: "8px", lg: "8px" }}
                      height={{
                        sm: "27px",
                        base: "27px",
                        lg: "42px",
                        xl: "42px",
                      }}
                    />
                    <Image
                      src={
                        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-firebase-icon.svg"
                      }
                      w="40px"
                      mt="20px"
                      mr={{ xl: "8px", lg: "8px" }}
                      height={{
                        sm: "27px",
                        base: "27px",
                        lg: "42px",
                        xl: "42px",
                      }}
                      borderRadius={"10px"}
                    />
                  </Center>

                  <Text
                    mt="10px"
                    ml={{
                      lg: "-40px",
                      md: "-40px",
                      sm: "-40px",
                      base: "-16px",
                    }}
                    fontWeight={"bold"}
                    fontSize={{
                      lg: "14px",
                      md: "14px",
                      sm: "14px",
                      base: "12px",
                    }}
                    lineHeight={"20px"}
                    width={{
                      lg: "437px",
                      md: "437px",
                      sm: "437px",
                      base: "300px",
                    }}
                  >
                    FOODI is an Food ordering and food delivery platform where
                    you can order your favorite food by sitting in your home,
                    this website have login,signup,add to cart and Stripe
                    payment method it also have admin dashbord where we can
                    manage the users and items
                  </Text>

                  <Center>
                    <a href="https://foodie-app-3410b.web.app/" target="blank">
                      {" "}
                      <Button
                        position={""}
                        _hover={{ bg: "black", color: "pink" }}
                        bg="purple.600"
                        w="100px"
                        ml={{
                          lg: "-50px",
                          md: "-50px",
                          sm: "-50px",
                          base: "-10px",
                        }}
                        mt="15px"
                      >
                        Live
                      </Button>{" "}
                    </a>
                    <a
                      href="https://github.com/dhiraj19999/FOODI"
                      target="blank"
                    >
                      {" "}
                      <Button
                        position={""}
                        _hover={{ bg: "black", color: "pink" }}
                        bg="purple.600"
                        w="100px"
                        ml="30px"
                        mt="15px"
                      >
                        Git
                      </Button>
                    </a>
                  </Center>
                </Center>
              </WrapItem>
            </Center>
          </WrapItem>

          <WrapItem
            className={styles.profirst1}
            w={{ lg: "450px", md: "450px", base: "310px", sm: "450px" }}
            style={{ borderRadius: "6px" }}
            height={{ lg: "640px", md: "640px", sm: "640px", base: "600px" }}
          >
            <Center display={"block"}>
              <WrapItem
                ml={{ lg: "50px", md: "50px", sm: "50px", base: "24px" }}
                mt="30px"
                className={styles.profirst1}
                w={{ lg: "350px", md: "350px", base: "260px", sm: "350px" }}
                h={{ lg: "320px", md: "320px", base: "250px", sm: "320px" }}
                style={{ borderRadius: "6px" }}
              >
                <Center display={"block"}>
                  <Image
                    borderRadius={"10px"}
                    w={{ lg: "330px", md: "330px", base: "240px", sm: "330px" }}
                    fit="cover"
                    h={{ lg: "300px", md: "300px", base: "230px", sm: "300px" }}
                    mt="10px"
                    ml="10px"
                    src={news[count2]}
                  />

                  <Text
                    fontSize={"28px"}
                    fontWeight="bold"
                    mt="30px"
                    ml={{
                      lg: "-50px",
                      base: "-24px",
                      sm: "-50px",
                      md: "-50px",
                    }}
                  >
                    Deccan Chronicle
                  </Text>

                  <Center>
                    <Image
                      src={html}
                      w="40px"
                      mt="20px"
                      ml={{
                        lg: "-45px",
                        md: "-45px",
                        sm: "-45px",
                        base: "-15px",
                      }}
                      borderRadius={"10px"}
                    />
                    <Image
                      src={css}
                      w="40px"
                      mt="20px"
                      ml={{ lg: "50px", md: "50px", sm: "50", base: "40px" }}
                      borderRadius={"10px"}
                    />
                    <Image
                      src={js}
                      w="40px"
                      mt="20px"
                      ml={{ lg: "50px", md: "50px", sm: "50", base: "40px" }}
                      borderRadius={"10px"}
                    />
                    <Image
                      w="40px"
                      mt="20px"
                      ml={{ lg: "50px", md: "50px", sm: "50", base: "40px" }}
                      src="https://img.icons8.com/external-others-inmotus-design/2x/external-API-vkontakte-others-inmotus-design-2.png"
                    />
                  </Center>

                  <Text
                    mt="10px"
                    ml={{
                      lg: "-40px",
                      md: "-40px",
                      sm: "-40px",
                      base: "-16px",
                    }}
                    fontWeight={"bold"}
                    fontSize={{
                      lg: "14px",
                      md: "14px",
                      sm: "14px",
                      base: "12px",
                    }}
                    lineHeight={"20px"}
                    width={{
                      lg: "437px",
                      md: "437px",
                      sm: "437px",
                      base: "300px",
                    }}
                  >
                    Deccan Chronicle publishes the largest circulated English
                    newspaper in South India, collaborative project of five
                    members which is completed in five days, News sections are
                    developed My area of responsibility is to Develope Nation
                    and World section
                  </Text>

                  <Center>
                    <a href="https://drive.google.com/file/d/1Xuj9_-D1HV3kJZ75SexkVlkM_JXGJMC2/view">
                      {" "}
                      <Button
                        _hover={{ bg: "black", color: "pink" }}
                        position={""}
                        bg="purple.600"
                        w="100px"
                        ml={{
                          lg: "-50px",
                          md: "-50px",
                          sm: "-50px",
                          base: "-10px",
                        }}
                        mt="17px"
                      >
                        Demo Video
                      </Button>{" "}
                    </a>
                    <a href="https://github.com/Ravi-047/swank-meeting-7218">
                      {" "}
                      <Button
                        _hover={{ bg: "black", color: "pink" }}
                        position={""}
                        bg="purple.600"
                        w="100px"
                        ml="30px"
                        mt="17px"
                      >
                        Git
                      </Button>
                    </a>
                  </Center>
                </Center>
              </WrapItem>
            </Center>
          </WrapItem>

          <WrapItem
            className={styles.profirst1}
            w={{ lg: "450px", md: "450px", base: "310px", sm: "450px" }}
            style={{ borderRadius: "6px" }}
            height={{ lg: "640px", md: "640px", sm: "640px", base: "600px" }}
          >
            <Center display={"block"}>
              <WrapItem
                ml={{ lg: "50px", md: "50px", sm: "50px", base: "24px" }}
                mt="30px"
                className={styles.profirst1}
                w={{ lg: "350px", md: "350px", base: "260px", sm: "350px" }}
                h={{ lg: "320px", md: "320px", base: "250px", sm: "320px" }}
                style={{ borderRadius: "6px" }}
              >
                <Center display={"block"}>
                  <Image
                    borderRadius={"10px"}
                    w={{ lg: "330px", md: "330px", base: "240px", sm: "330px" }}
                    fit="cover"
                    h={{ lg: "300px", md: "300px", base: "230px", sm: "300px" }}
                    mt="10px"
                    ml="10px"
                    src={sce[count4]}
                  />

                  <Text
                    fontSize="28px"
                    fontWeight="bold"
                    mt="30px"
                    ml={{
                      lg: "-50px",
                      base: "-25px",
                      sm: "-50px",
                      md: "-50px",
                    }}
                  >
                    MeetUp
                  </Text>

                  <Center>
                    <Image
                      src={
                        "https://media.licdn.com/dms/image/D5612AQHJKVf2i9XXzw/article-cover_image-shrink_600_2000/0/1697159715452?e=2147483647&v=beta&t=w3POH8gXp2o9_h8qYQOu80hrfp22-kXfUJQYLt9Qt7I"
                      }
                      w="50px"
                      mt="20px"
                      ml={{
                        lg: "-45px",
                        md: "-35px",
                        sm: "-45px",
                        base: "-16px",
                      }}
                    />
                    <Image
                      src={"https://shadcn.com/og.jpg"}
                      w="50px"
                      mt="20px"
                      ml={{ lg: "30px", md: "30px", sm: "50", base: "10px" }}
                    />
                    <Image
                      src={
                        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png"
                      }
                      w="40px"
                      mt="20px"
                      ml={{ lg: "30px", md: "30px", sm: "50", base: "10px" }}
                      borderRadius={"10px"}
                    />
                    <Image
                      w="40px"
                      mt="20px"
                      ml={{ lg: "30px", md: "30px", sm: "30", base: "10px" }}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                    />
                    <Image
                      w="40px"
                      mt="20px"
                      ml={{ lg: "30px", md: "30px", sm: "30", base: "10px" }}
                      src={
                        "https://www.svgrepo.com/show/354113/nextjs-icon.svg"
                      }
                    />
                    <Image
                      w="40px"
                      mt="20px"
                      ml={{ lg: "30px", md: "30px", sm: "30", base: "10px" }}
                      src={"https://cdn.42matters.com/sdk/getstream.io.png"}
                    />
                  </Center>

                  <Text
                    mt="10px"
                    ml={{
                      lg: "-40px",
                      md: "-40px",
                      sm: "-40px",
                      base: "-16px",
                    }}
                    fontWeight={"bold"}
                    fontSize={{
                      lg: "14px",
                      md: "14px",
                      sm: "14px",
                      base: "12px",
                    }}
                    lineHeight={"20px"}
                    width={{
                      lg: "437px",
                      md: "437px",
                      sm: "437px",
                      base: "300px",
                    }}
                  >
                    MeetUp Built with the latest Next.js and TypeScript, this
                    project replicates Zoom, a widely used video conferencing
                    tool. It enables users to securely log in, create meetings
                    and access various meeting functionalities such as
                    recording, screen sharing, and managing participants.
                  </Text>

                  <Center>
                    <a href="https://main--meetup-video-conference-app.netlify.app">
                      {" "}
                      <Button
                        _hover={{ bg: "black", color: "pink" }}
                        position={""}
                        bg="purple.600"
                        w="100px"
                        ml={{
                          lg: "-50px",
                          md: "-50px",
                          sm: "-50px",
                          base: "-10px",
                        }}
                        mt="15px"
                      >
                        Live
                      </Button>{" "}
                    </a>
                    <a href="https://github.com/dhiraj19999/MeetUp">
                      {" "}
                      <Button
                        _hover={{ bg: "black", color: "pink" }}
                        position={""}
                        bg="purple.600"
                        w="100px"
                        ml="30px"
                        mt="15px"
                      >
                        Git
                      </Button>
                    </a>
                  </Center>
                </Center>
              </WrapItem>
            </Center>
          </WrapItem>
        </SimpleGrid>
      </Wrap>
    </Box>
  );
}

export default Project;
