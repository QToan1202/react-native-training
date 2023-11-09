import { H5, SizableText, Tabs, TabsProps } from "tamagui";

const CustomTabs = (props: TabsProps) => (
  <Tabs
    defaultValue="home"
    orientation="horizontal"
    flexDirection="column"
    theme="alt1"
    borderRadius="$4"
    borderWidth="$0.25"
    borderColor="$borderColor"
    overflow="hidden"
    {...props}
  >
    <Tabs.List>
      <Tabs.Tab value="home">
        <SizableText>Home</SizableText>
      </Tabs.Tab>
      <Tabs.Tab value="notifications">
        <SizableText>Notifications</SizableText>
      </Tabs.Tab>
      <Tabs.Tab value="profile">
        <SizableText>Profile</SizableText>
      </Tabs.Tab>
    </Tabs.List>

    <Tabs.Content
      alignItems="center"
      justifyContent="center"
      value="home"
      p="$10"
    >
      <H5>Home</H5>
    </Tabs.Content>
    <Tabs.Content
      alignItems="center"
      justifyContent="center"
      value="notifications"
      p="$10"
    >
      <H5>Notifications</H5>
    </Tabs.Content>
    <Tabs.Content
      alignItems="center"
      justifyContent="center"
      value="profile"
      p="$10"
    >
      <H5>Profile</H5>
    </Tabs.Content>
  </Tabs>
);

export default CustomTabs;
