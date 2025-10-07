import { Text, View } from 'react-native'
import { SignOutButton } from '../../components/SignOutButton.jsx'
import {useEffect, useState, useTransition} from 'react'
import { styles } from "../../assets/styles/home.style";
import { useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { Alert, FlatList, Image, RefreshControl, TouchableOpacity } from "react-native";
import { useTransactions } from "../../hooks/useTransactions";
import PageLoader from '../../components/PageLoader.jsx';
import { Ionicons } from "@expo/vector-icons";
import { BalanceCard } from "../../components/BalanceCard";
import { TransactionItem } from "../../components/TransactionItem"
import NoTransactionsFound from "../../components/NoTransactionsFound";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
export default function Page() {
  const { user } = useUser();
  const router = useRouter();

  const [refreshing, setRefreshing] = useState(false)

  const {
    transactions,
    summary,
    isLoading,
    loadData,
    deleteTransaction
  } = useTransactions(
    user.id
  )

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }

  useFocusEffect(
  useCallback(() => {
    loadData();
  }, [loadData])
);

  const handleDelete = (id) => {
    Alert.alert("Delete Transaction", "Are you sure you want to delete this transaction?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: () => deleteTransaction(id) },
    ]);
  }

  if (isLoading && !refreshing) return <PageLoader />

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* HEADER */}
        <View style={styles.header}>
          {/* LEFT */}
          <View style={styles.headerLeft}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.headerLogo}
              resizeMode="contain"
            />
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome,</Text>
              <Text style={styles.usernameText}>
                {user?.emailAddresses[0]?.emailAddress.split("@")[0]}
              </Text>
            </View>
          </View>
          {/* RIGHT */}
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.addButton} onPress={() => router.push("/create")}>
              <Ionicons name="add" size={20} color="#FFF" />
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
            <SignOutButton />
          </View>
        </View>

        <BalanceCard summary={summary} />

        <View style={styles.transactionsHeaderContainer}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
        </View>
      </View>

      {/* FlatList is a performant way to render long lists in React Native. */}
      {/* it renders items lazily — only those on the screen. */}
      <FlatList
        style={styles.transactionsList}
        contentContainerStyle={styles.transactionsListContent}
        data={transactions}
        renderItem={({ item }) => <TransactionItem item={item} onDelete={handleDelete} />}
        ListEmptyComponent={<NoTransactionsFound />}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
}