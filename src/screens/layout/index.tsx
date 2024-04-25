import React from 'react';
import { Box, StatusBar, ScrollView, VStack, KeyboardAvoidingView } from '@gluestack-ui/themed';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Platform } from 'react-native';

type GuestLayoutProps = {
    children: React.ReactNode;
};

export default function Layout(props: GuestLayoutProps) {
    return (
        <SafeAreaProvider>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios'? 'padding': 'height'}>
                <SafeAreaView>
                    <Box height={'$full'} mx={4} backgroundColor='#fff' mb={'$2'}>
                        <StatusBar
                            translucent
                            backgroundColor="transparent"
                            barStyle="dark-content"
                        />
                        <ScrollView flex={1}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                alignItems: 'center',
                                flexGrow: 1,
                                justifyContent: 'center',
                            }}
                            sx={{
                                '@base': { _light: { bg: '$white' } },
                                '@md': { _light: { bg: '$secondary50' }, p: '$8' },
                                _dark: { bg: '$backgroundDark900' },
                            }}
                            bounces={false}>
                            <VStack
                                w="$full"
                                flex={1}
                                overflow="scroll"
                                sx={{
                                    '@md': {
                                        maxWidth: '$containerWidth',
                                        flexDirection: 'row',
                                        rounded: '$xl',
                                        flex: undefined,
                                    },
                                }}>
                                {props.children}
                            </VStack>
                        </ScrollView>
                    </Box>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </SafeAreaProvider>
    );
}