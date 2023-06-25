import httpService from "@/service/api";
import { createStore } from "vuex";

export default createStore({
  state: {
    accounts: [],
    selectedAccount: "act_147",
    type: "clicks",
  },
  getters: {
    accounts(state) {
      return state.accounts.map((account) => ({
        id: account.id,
        name: account.name,
      }));
    },
    accountData(state) {
      return (
        state.accounts.find((account) => state.selectedAccount === account.id)
          ?.insights.data || []
      );
    },
    account(state) {
      return state.selectedAccount;
    },
    type(state) {
      return state.type;
    },
  },
  mutations: {
    SET_ACCOUNTS(state, accounts) {
      state.accounts = accounts;
    },
    SET_ACCOUNT(state, account) {
      state.selectedAccount = account;
    },
    SET_TYPE(state, type) {
      state.type = type;
    },
  },
  actions: {
    getAccounts({ commit }) {
      httpService
        .get("/myaccounts")
        .then((res) => {
          commit("SET_ACCOUNTS", res.data.accounts);
        })
        .catch((e) => {
          console.error(e);
        });
    },
    selectAccount({ commit }, account) {
      commit("SET_ACCOUNT", account);
    },
    setType({ commit }, type) {
      commit("SET_TYPE", type);
    },
  },
});
