import { Box, HStack, Heading, Image, Progress, ProgressFilledTrack, Text, VStack } from "@gluestack-ui/themed";
import Layout from "../layout";
import { Bell, QrCode, Share2 } from "lucide-react-native";

const Icon = require('.././../../Images/Home.png');

const HomePage = () => {
    return (
        <Layout>
            <Box mx={'$1'} >
                <HStack alignItems="center" justifyContent="space-between">
                    <Image size='sm' source={Icon} alt="img" />
                    <Bell size={24} />
                </HStack>
                <Box alignItems="flex-end" mx={'$1'}>
                    <Text size="sm">SLIDE TO ADD <Text size="sm" color='$red400'>COMMERCIAL</Text></Text>
                </Box>
            </Box>
            <Box alignItems="center" >
                <Box hardShadow="1" mt={'$2'} rounded={'$lg'} w={'$full'} bg="#301615" h={'$56'}>
                    <HStack p={'$3'} justifyContent="space-between">
                        <Heading size="sm" color="$white">KAPIL JADHAV</Heading>
                        <HStack alignItems="center" space="sm" mr={'$2'}>
                            <Text color="#FFF">SHARE</Text>
                            <Share2 color={'#FFF'} />
                        </HStack>
                    </HStack>
                    <Box>
                        <HStack alignItems="center" justifyContent="space-between">
                            <Box ml={-5} w={160} bg='$yellow500' h={'$16'} rounded={'$lg'}>
                                <HStack alignItems="center">
                                    <Image size='sm' source={Icon} alt="img" />
                                    <Text mt={'$4'} ml={-10} color="$white" fontWeight={'$semibold'}>entainance</Text>
                                </HStack>
                            </Box>
                            <VStack>
                                <Box justifyContent="center" borderTopLeftRadius={10} alignSelf="flex-end" w={190} h={'$6'} bg="$white">
                                    <Text ml={'$1'} size="sm">ID CODE - R T R G S 9 7 6 8</Text>
                                </Box>
                                <Box gap={'$1'} borderTopLeftRadius={10} borderBottomLeftRadius={10} justifyContent="center" hardShadow="2" alignSelf="flex-end" w={210} h={'$16'} bg="#251211">
                                    <Text color="$white" ml={'$2'} size="sm">AADHAAR - XXXX XXXX XX12</Text>
                                    <Text color="$white" ml={'$2'} size="sm">PAN           - XXXX XXXX XX12</Text>
                                </Box>
                                <Box justifyContent="center" borderEndStartRadius={10} alignSelf="flex-end" w={190} h={'$6'} bg="$white">
                                    <Text ml={'$3'} size="sm">R SCORE - 450</Text>
                                </Box>
                            </VStack>
                        </HStack>
                        <Box mt={-10}>
                            <HStack space="sm" alignItems="center" ml={'$1'}>
                                <QrCode size={40} color={'#FFF'} />
                                <Text color="#FFF" size="sm">R SCORE - 450</Text>
                            </HStack>
                        </Box>
                    </Box>
                    <Text mr={'$4'} size="sm" color="$white" alignSelf="flex-end">RESIDENTIAL TENANT</Text>
                </Box>
            </Box>
            <Text textAlign='right' mt={'$3'} mx={'$1'} size="sm">COMPLETE YOUR <Text size="sm" color="$red400">PROFILE</Text></Text>
            <Box mt={'$2'}>
                <HStack alignItems="center">
                    <Image size='sm' source={Icon} alt="img" />
                    <Text mt={'$4'} ml={-10} color="$white" fontWeight={'$semibold'}>entainance</Text>
                </HStack>
                <Box >
                    <HStack mx={'$1'} justifyContent="space-between">
                        <Text color="$red400">Worst</Text>
                        <Text color='$green400'>Excellent</Text>
                    </HStack>
                    <Box>
                        <HStack mt={'$1'} alignSelf="center" alignItems="center">
                            <Progress value={100} w={93} size="md">
                                <ProgressFilledTrack bg='$red400' />
                            </Progress>
                            <Progress value={100} w={93} size="md">
                                <ProgressFilledTrack bg="$orange400" />
                            </Progress>
                            <Progress value={100} w={93} size="md">
                                <ProgressFilledTrack bg='$yellow400' />
                            </Progress>
                            <Progress value={100} w={93} size="md">
                                <ProgressFilledTrack bg="$green400" />
                            </Progress>
                        </HStack>
                    </Box>
                    <Box mt={'$2'} position="absolute" alignSelf="center" rounded={'$lg'} alignItems="center" justifyContent="center" w={'$16'} h={'$10'} hardShadow="1" bg="$white">
                        <Text fontWeight={'$semibold'}>450</Text>
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
};

export default HomePage;
