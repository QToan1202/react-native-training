import { NativeStackHeaderProps, createNativeStackNavigator } from '@react-navigation/native-stack'

import { RootStackParamList } from '@practice-two/shared/types'
import { Feature } from '@practice-two/shared/hocs'
import { BrowseBar, CategoryBar } from '@practice-two/shared/components'
import { CustomHeader } from '@practice-two/shared/utils'

const Stack = createNativeStackNavigator<RootStackParamList>()

const BrowseStack = () => (
  <Feature feat="browse">
    <Stack.Navigator>
      <Stack.Screen
        name="CategoryDetail"
        getComponent={() => require('../screens').CategoryDetail}
        options={{
          header: (props: NativeStackHeaderProps) => CustomHeader(CategoryBar, props),
        }}
      />
      <Stack.Screen
        name="Browse"
        getComponent={() => require('../screens').Browse}
        options={{
          header: (props: NativeStackHeaderProps) => CustomHeader(BrowseBar, props),
        }}
      />
    </Stack.Navigator>
  </Feature>
)

export default BrowseStack
