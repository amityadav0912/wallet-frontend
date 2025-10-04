import { Redirect } from 'expo-router';
import { Stack } from 'expo-router/stack'
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'


export default function Layout() {
  const {isSignedIn, IsLoaded} = useUser();

  if(!isSignedIn) return <Redirect href={"/sign-in"}/>
  return <Stack screenOptions={{ headerShown: false}}/>
}