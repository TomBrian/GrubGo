import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SVGElements } from '../../../components/SVGElements';
import { COLORS } from '../../../styles/colors';
import { Typography } from '../../../styles/typography';

export function BottomTabBar({ state, descriptors, navigation }: {
    state: any,
    descriptors: any,
    navigation: any
}) {
    const TabIcon = ({ label, active }: { label: string, active: boolean }) => {
        switch (label) {
            case 'Home':
                return <SVGElements.Home color={active ? COLORS.PRIMARY : COLORS.DARK} />
            case 'Browse':
                return <SVGElements.Browse color={active ? COLORS.PRIMARY : COLORS.DARK} />
            case 'Basket':
                return <SVGElements.Basket color={active ? COLORS.PRIMARY : COLORS.DARK} />
            case 'Account':
                return <SVGElements.Account color={active ? COLORS.PRIMARY : COLORS.DARK} />
        }
    }
    return (
        <View style={{ flexDirection: 'row', alignItems: "center", paddingVertical: 16 }}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, alignItems: "center" }}
                    >
                        <TabIcon
                            active={isFocused}
                            label={label} />
                        <Typography.P style={{ color: isFocused ? COLORS.PRIMARY : COLORS.DARK }}>
                            {label}
                        </Typography.P>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}