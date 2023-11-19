import { createSlice } from '@reduxjs/toolkit';

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {
    username: 'User Name',
    userLastName: 'nom',
    profileImage: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    favoriteGym: 'Basic Fit',
    favoriteSport: 'Fitness',
    friendsCount: 50,
    email:'user@namle.com',
    biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lorem eu purus feugiat ullamcorper. Vivamus nec quam ut erat malesuada tincidunt in non libero.',
  },
  reducers: {
    updateUsername: (state, action) => {
      state.username = action.payload;
      console.log(state.username);
    },
    updateUserLastName: (state, action) => {
        state.userLastName = action.payload;
        console.log(state.userLastName);
      },
    updateProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
    updateFavoriteGym: (state, action) => {
      state.favoriteGym = action.payload;
      console.log(state.favoriteGym);
    },
    updateFavoriteSport: (state, action) => {
      state.favoriteSport = action.payload;
      console.log(state.favoriteSport);
    },
    updateFriendsCount: (state, action) => {
      state.friendsCount = action.payload;
    },
    updateBiography: (state, action) => {
      state.biography = action.payload;
      console.log(state.biography);
    },
    updateEmail: (state, action) => {
        state.email = action.payload;
        console.log(state.biography);
      },
  },
});

export const {
  updateUsername,
  updateProfileImage,
  updateFavoriteGym,
  updateFavoriteSport,
  updateFriendsCount,
  updateBiography,
} = userProfileSlice.actions;

export default userProfileSlice.reducer;
