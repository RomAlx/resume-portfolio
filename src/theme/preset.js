// Professional Resume Theme - Light Base with Green Accent and Transparent Layouts
const lightBaseTheme = {
    common: {
        // Primary accent - vibrant green
        primaryColor: "#00C851", // Vibrant green
        primaryColorHover: "#00A640",
        primaryColorPressed: "#008A36",
        primaryColorSuppl: "#E8F8F0",

        // Secondary accent - softer green
        secondaryColor: "#4CAF50", // Softer green
        secondaryColorHover: "#45A049",
        secondaryColorPressed: "#3E8E41",
        secondaryColorSuppl: "#F1F8E9",

        // Semantic colors
        successColor: "#00C851",
        warningColor: "#FF9800",
        errorColor: "#F44336",
        infoColor: "#2196F3",

        // Base colors - clean whites
        baseColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        cardColor: "#FFFFFF",
        modalColor: "#FFFFFF",
        popoverColor: "#FFFFFF",

        // Text colors - high contrast for readability
        textColor1: "#212121", // Very dark gray for primary text
        textColor2: "#424242", // Medium dark gray for secondary text
        textColor3: "#757575", // Medium gray for tertiary text

        // Border colors - subtle
        borderColor: "#E0E0E0",

        // Radius settings - clean and minimal
        borderRadius: "6px",
        borderRadiusSmall: "3px",

        // Typography
        fontSizeMedium: "14px",
        fontSizeLarge: "16px",
        fontSizeSmall: "12px",

        heightMedium: "36px",
        heightLarge: "42px",
        heightSmall: "30px",

        transitionDuration: "0.15s"
    },
};

// Dark theme base - #292929 background
const darkBaseTheme = {
    common: {
        // Base colors for dark theme - #292929 as main background
        baseColor: "#292929", // Main dark background
        bodyColor: "#2F2F2F", // Slightly lighter for body
        cardColor: "#333333", // Cards and elevated surfaces
        modalColor: "#333333", // Modals
        popoverColor: "#333333", // Popovers

        // Text colors for dark theme - optimized for #292929 background
        textColor1: "#FFFFFF", // Pure white for primary text
        textColor2: "#E0E0E0", // Light gray for secondary text
        textColor3: "#BDBDBD", // Medium gray for tertiary text

        // Border colors for dark theme
        borderColor: "#404040",

        // Green accents for dark theme
        primaryColor: "#00E676", // Brighter green for dark background
        primaryColorHover: "#00C853",
        primaryColorPressed: "#00B84C",

        secondaryColor: "#66BB6A", // Softer green for dark theme
        secondaryColorHover: "#5CBF60",
        secondaryColorPressed: "#52C056"
    },
};

// Component styles - light theme optimized for green accents with transparent layouts
export const lightAppTheme = {
    ...lightBaseTheme,

    Button: {
        textColorPrimary: "#FFFFFF",
        textColorInfo: "#FFFFFF",
        textColorWarning: "#FFFFFF",
        fontWeightStrong: "500",
        paddingMedium: "0 16px",
        paddingLarge: "0 20px",
        paddingSmall: "0 12px",
        boxShadow: "none",
        boxShadowHover: "0 2px 8px rgba(0, 200, 81, 0.2)",
        boxShadowPressed: "0 1px 3px rgba(0, 200, 81, 0.3)",
        boxShadowFocus: "0 0 0 2px rgba(0, 200, 81, 0.2)",
        borderRadius: "6px"
    },

    Card: {
        borderRadius: "8px",
        paddingMedium: "20px",
        titleFontSizeMedium: "18px",
        titleFontWeight: "600",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        color: "#FFFFFF",
        borderColor: "#E0E0E0"
    },

    Collapse: {
        color: "transparent",
        headerColor: "transparent",
        footerColor: "transparent",
        siderColor: "transparent"
    },

    CollapseItem:{
        color: "transparent",
        headerColor: "transparent",
        footerColor: "transparent",
        siderColor: "transparent"
    },

    Modal: {
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        borderRadius: "8px",
        padding: "24px",
        color: "#FFFFFF"
    },

    Input: {
        borderRadius: "6px",
        heightMedium: "38px",
        boxShadow: "none",
        borderHover: "1px solid #00C851",
        borderFocus: "1px solid #00C851",
        boxShadowFocus: "0 0 0 2px rgba(0, 200, 81, 0.2)",
        color: "#FFFFFF",
        textColor: "#212121",
        borderColor: "#E0E0E0",
        fontSize: "14px"
    },

    Select: {
        peers: {
            InternalSelection: {
                borderRadius: "6px",
                heightMedium: "38px",
                borderHover: "1px solid #00C851",
                textColor: "#212121",
                borderColor: "#E0E0E0"
            },
            InternalSelectMenu: {
                borderRadius: "8px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                paddingMedium: "8px",
                color: "#FFFFFF"
            }
        }
    },

    Dropdown: {
        optionTextColorHover: "#00C851",
        optionTextColorActive: "#00C851",
        optionColorHover: "rgba(0, 200, 81, 0.08)",
        optionColorActive: "rgba(0, 200, 81, 0.12)",
        borderRadius: "8px",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        padding: "8px",
        color: "#FFFFFF"
    },

    Menu: {
        borderRadius: "8px",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        itemTextColorHover: "#00C851",
        itemTextColorActive: "#00C851",
        itemColorHover: "rgba(0, 200, 81, 0.08)",
        itemColorActive: "rgba(0, 200, 81, 0.12)",
        itemHeight: "38px",
        dividerColor: "#E0E0E0",
        padding: "8px",
        color: "#FFFFFF"
    },

    Tabs: {
        tabBorderRadius: "6px",
        tabFontWeightActive: "500",
        tabTextColorActive: "#00C851",
        barColor: "#00C851",
        tabPadding: "12px 16px"
    },

    Tag: {
        borderRadius: "6px",
        heightMedium: "26px",
        fontSizeMedium: "12px",
        padding: "0 8px"
    },

    Switch: {
        railColorActive: "#00C851"
    },

    Checkbox: {
        borderRadius: "4px",
        colorChecked: "#00C851"
    },

    Radio: {
        radioColorActive: "#00C851",
        boxShadowFocus: "0 0 0 2px rgba(0, 200, 81, 0.2)"
    },

    DatePicker: {
        itemTextColorActive: "#FFFFFF",
        itemColorActive: "#00C851",
        cellColorHover: "rgba(0, 200, 81, 0.08)"
    },

    Tooltip: {
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        color: "#2F2F2F",
        textColor: "#FFFFFF",
        borderRadius: "6px",
        fontSize: "12px"
    },

    Popover: {
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
        padding: "16px",
        borderRadius: "8px",
        color: "#FFFFFF"
    },

    Drawer: {
        boxShadow: "0 0 24px rgba(0, 0, 0, 0.15)",
        color: "#FFFFFF"
    },

    Form: {
        labelFontWeight: "500",
        labelTextColor: "#424242",
        feedbackFontSizeSmall: "12px",
        feedbackFontSizeMedium: "13px",
        feedbackFontSizeLarge: "14px",
        feedbackHeightSmall: "1.4em",
        feedbackHeightMedium: "1.6em",
        feedbackHeightLarge: "1.8em",
        labelMarginBottom: "4px"
    },

    FormItem: {
        feedbackTextColorError: "#F44336",
        asteriskColor: "#F44336",
        labelPadding: "0 0 4px 0"
    },

    // Все Layout компоненты сделаны прозрачными
    Layout: {
        color: "transparent",
        headerColor: "transparent",
        footerColor: "transparent",
        siderColor: "transparent"
    },

    LayoutHeader: {
        padding: "16px 24px",
        color: "transparent",
        borderColor: "#E0E0E0"
    },

    LayoutSider: {
        padding: "0",
        color: "transparent"
    },

    LayoutContent: {
        color: "transparent",
        padding: "24px"
    },

    LayoutFooter: {
        padding: "16px 24px",
        color: "transparent",
        borderColor: "#E0E0E0"
    },

    Avatar: {
        borderRadius: "50%",
        color: "#F5F5F5"
    },

    Icon: {
        color: "#757575"
    },

    Divider: {
        color: "#E0E0E0"
    },

    Space: {
        gap: "12px"
    },

    Grid: {
        gutter: "16px"
    },

    List: {
        color: "transparent",
        itemColor: "#FFFFFF",
        itemColorHover: "#FAFAFA",
        borderColor: "#E0E0E0"
    },

    ListItem: {
        borderColor: "#E0E0E0",
        padding: "12px 16px"
    },

    DataTable: {
        thColor: "#FAFAFA",
        thTextColor: "#424242",
        thFontWeight: "500",
        tdColor: "#FFFFFF",
        tdTextColor: "#212121",
        borderColor: "#E0E0E0",
        borderRadius: "8px",
        tdColorHover: "#FAFAFA",
        headerBorderColor: "#E0E0E0",
        tdColorStriped: "#F9F9F9",
        fontSize: "14px"
    },

    Pagination: {
        itemSize: "32px",
        itemPadding: "0 8px",
        itemTextColor: "#424242",
        itemColorHover: "#F5F5F5",
        buttonIconColor: "#757575",
        borderRadius: "6px"
    },

    TabPane: {
        padding: "20px",
        color: "#FFFFFF"
    },

    Empty: {
        iconColor: "#BDBDBD",
        textColor: "#757575",
        iconSize: "48px"
    },

    Statistic: {
        labelFontSize: "14px",
        contentFontSize: "28px",
        labelTextColor: "#757575",
        contentTextColor: "#212121",
        contentFontWeight: "600"
    },

    Badge: {
        color: "#F44336",
        borderRadius: "12px"
    },

    Alert: {
        padding: "12px 16px",
        borderRadius: "8px",
        iconSize: "16px",
        titleFontSize: "14px",
        iconMargin: "0 8px 0 0"
    },

    Progress: {
        railColor: "#E0E0E0",
        railHeight: "6px",
        textColorCircle: "#212121",
        borderRadius: "3px"
    },

    Spin: {
        size: "24px",
        color: "#00C851"
    },

    Typography: {
        headerFontWeight: "600",
        titleFontWeight: "500",
        textColor: "#212121",
        linkColor: "#00C851",
        linkColorHover: "#00A640",
        codeColor: "#2F2F2F",
        codeBackgroundColor: "#F5F5F5"
    },

    // Timeline styles
    Timeline: {
        lineColor: "#E0E0E0",
        circleColor: "#FFFFFF",
        circleBorderColor: "#00C851",
        titleFontWeight: "500",
        contentFontSize: "14px",
        metaFontSize: "12px",
        metaTextColor: "#757575",
        titleTextColor: "#212121",
        contentTextColor: "#424242",
        titleMarginBottom: "4px",
        contentMarginBottom: "8px",
        itemPaddingBottom: "20px",
        timeAxisWidth: "2px",
        dotSize: "10px",
        dotBorder: "2px",
        iconSize: "16px"
    }
};

// Dark theme with #292929 background and transparent layouts
export const darkAppTheme = {
    ...lightAppTheme,
    common: {
        ...lightAppTheme.common,
        ...darkBaseTheme.common
    },

    Button: {
        ...lightAppTheme.Button,
        textColorPrimary: "#FFFFFF",
        boxShadowHover: "0 2px 8px rgba(0, 230, 118, 0.3)",
        boxShadowPressed: "0 1px 3px rgba(0, 230, 118, 0.4)",
        boxShadowFocus: "0 0 0 2px rgba(0, 230, 118, 0.3)"
    },

    Card: {
        ...lightAppTheme.Card,
        color: "#333333",
        colorEmbedded: "#383838",
        borderColor: "#404040",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)"
    },

    Collapse: {
        color: "transparent",
        headerColor: "transparent",
        footerColor: "transparent",
        siderColor: "transparent"
    },

    CollapseItem:{
        color: "transparent",
        headerColor: "transparent",
        footerColor: "transparent",
        siderColor: "transparent"
    },

    Input: {
        ...lightAppTheme.Input,
        color: "#333333",
        textColor: "#FFFFFF",
        borderColor: "#404040",
        borderHover: "1px solid #00E676",
        borderFocus: "1px solid #00E676",
        boxShadowFocus: "0 0 0 2px rgba(0, 230, 118, 0.3)",
        placeholderColor: "#BDBDBD"
    },

    Menu: {
        ...lightAppTheme.Menu,
        color: "#333333",
        itemTextColorHover: "#00E676",
        itemTextColorActive: "#00E676",
        itemColorActive: "rgba(0, 230, 118, 0.2)",
        itemColorHover: "rgba(0, 230, 118, 0.1)",
        dividerColor: "#404040"
    },

    Dropdown: {
        ...lightAppTheme.Dropdown,
        color: "#333333",
        optionTextColorActive: "#00E676",
        optionTextColorHover: "#00E676",
        optionColorActive: "rgba(0, 230, 118, 0.2)",
        optionColorHover: "rgba(0, 230, 118, 0.1)"
    },

    Drawer: {
        boxShadow: "0 0 24px rgba(0, 0, 0, 0.15)",
        color: "#101010"
    },

    Modal: {
        ...lightAppTheme.Modal,
        color: "#333333",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)"
    },

    Popover: {
        ...lightAppTheme.Popover,
        color: "#333333",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)"
    },

    Tooltip: {
        ...lightAppTheme.Tooltip,
        color: "#1F1F1F",
        textColor: "#FFFFFF"
    },

    // Все Layout компоненты остаются прозрачными и для темной темы
    Layout: {
        ...lightAppTheme.Layout,
        color: "transparent",
        headerColor: "transparent",
        footerColor: "transparent",
        siderColor: "transparent"
    },

    LayoutHeader: {
        ...lightAppTheme.LayoutHeader,
        color: "transparent",
        borderColor: "#404040"
    },

    LayoutSider: {
        ...lightAppTheme.LayoutSider,
        color: "transparent"
    },

    LayoutContent: {
        ...lightAppTheme.LayoutContent,
        color: "transparent"
    },

    LayoutFooter: {
        ...lightAppTheme.LayoutFooter,
        color: "transparent",
        borderColor: "#404040"
    },

    Form: {
        ...lightAppTheme.Form,
        labelTextColor: "#E0E0E0"
    },

    DataTable: {
        ...lightAppTheme.DataTable,
        thColor: "#383838",
        thTextColor: "#E0E0E0",
        tdColor: "#333333",
        tdTextColor: "#FFFFFF",
        tdColorHover: "#383838",
        headerBorderColor: "#404040",
        borderColor: "#404040",
        tdColorStriped: "#363636"
    },

    List: {
        ...lightAppTheme.List,
        color: "transparent",
        itemColor: "transparent",
        itemColorHover: "#101010",
        borderColor: "#404040"
    },

    ListItem: {
        ...lightAppTheme.ListItem,
        borderColor: "#404040"
    },

    Divider: {
        ...lightAppTheme.Divider,
        color: "#404040"
    },

    Pagination: {
        ...lightAppTheme.Pagination,
        itemTextColor: "#E0E0E0",
        buttonIconColor: "#BDBDBD",
        itemColorHover: "#383838"
    },

    Empty: {
        ...lightAppTheme.Empty,
        iconColor: "#666666",
        textColor: "#BDBDBD"
    },

    Statistic: {
        ...lightAppTheme.Statistic,
        labelTextColor: "#BDBDBD",
        contentTextColor: "#FFFFFF"
    },

    Progress: {
        ...lightAppTheme.Progress,
        railColor: "#404040",
        textColorCircle: "#FFFFFF"
    },

    Icon: {
        ...lightAppTheme.Icon,
        color: "#BDBDBD"
    },

    Avatar: {
        ...lightAppTheme.Avatar,
        color: "#383838"
    },

    Tabs: {
        ...lightAppTheme.Tabs,
        tabTextColorActive: "#00E676",
        barColor: "#00E676"
    },

    Switch: {
        ...lightAppTheme.Switch,
        railColorActive: "#00E676"
    },

    Checkbox: {
        ...lightAppTheme.Checkbox,
        colorChecked: "#00E676"
    },

    Radio: {
        ...lightAppTheme.Radio,
        radioColorActive: "#00E676",
        boxShadowFocus: "0 0 0 2px rgba(0, 230, 118, 0.3)"
    },

    DatePicker: {
        ...lightAppTheme.DatePicker,
        itemColorActive: "#00E676",
        cellColorHover: "rgba(0, 230, 118, 0.1)"
    },

    Spin: {
        ...lightAppTheme.Spin,
        color: "#00E676"
    },

    Typography: {
        ...lightAppTheme.Typography,
        textColor: "#FFFFFF",
        linkColor: "#00E676",
        linkColorHover: "#00C853",
        codeColor: "#E0E0E0",
        codeBackgroundColor: "#383838"
    },

    // Timeline styles for dark theme
    Timeline: {
        ...lightAppTheme.Timeline,
        lineColor: "#404040",
        circleColor: "#333333",
        circleBorderColor: "#00E676",
        titleTextColor: "#FFFFFF",
        contentTextColor: "#E0E0E0",
        metaTextColor: "#BDBDBD"
    }
};