import React from 'react';
import { Box, StatusBar, KeyboardAvoidingView, VStack } from '@gluestack-ui/themed';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Platform } from 'react-native';

type GuestLayoutProps = {
    children: React.ReactNode;
};

export default function LayoutForFlatListScreen(props: GuestLayoutProps) {
    return (
        <SafeAreaProvider>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <Box height="$full" mx={4} backgroundColor='#fff'>
                        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                        <Box flex={1}
                            style={{
                                alignItems: 'center',
                                flexGrow: 1,
                                justifyContent: 'center',
                            }}
                            sx={{
                                '@base': { _light: { bg: '$white' } },
                                '@md': { _light: { bg: '$secondary50' }, p: '$8' },
                                _dark: { bg: '$backgroundDark900' },
                            }}
                        >
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
                        </Box>
                    </Box>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </SafeAreaProvider>
    );
}
