Podcast Player | MaxPalianski

### 🔗 Links
* **Deploy Preview Podcast Player:**[https://maxpalianski.github.io/podcast-player/]


## ⏯️ Podcast Player:
### 📝 Описание
Кастомное SPA-приложение для поиска и прослушивания подкастов.
### 📊 Чек-лист

#### Section 1 - Landing page and search (15 / 40)
- [ ] The landing page loads and renders a list of podcasts fetched from the selected podcast API (+10) *(Временно используются mock-данные)*
- [x] Each podcast tile shows at least: cover image, title, author/feed name (+5)
- [x] A search input is present on the landing page (+5)
- [x] When the search input is empty, the default podcast list is shown (+5)
- [ ] When the search input has a value, search results are displayed (+5)
- [ ] Search requests are debounced or throttled (+5)
- [ ] A loading indicator is shown while a request is in flight (+5)
#### Section 2 - Podcast details page (10 / 25)
- [x] Clicking a podcast tile navigates to a details page for that podcast (+5)
- [ ] The details page lists episodes for the selected podcast (+10)
- [ ] Each episode item shows at least: title, publication date, duration (+5)
- [x] An in-app control returns the user to the landing page without using the browser's "Back" button (+5)
#### Section 3 - Podcast player (25 / 45)
- [x] Selecting an episode starts playback in the player (+5)
- [x] The player has a working Play / Pause toggle button (+5)
- [ ] The player shows current time and total time (or remaining time) (+5)
- [ ] The player has a progress bar that updates as the audio plays (+5)
- [ ] Clicking the progress bar seeks the audio to the clicked position (+10)
- [x] The player stays visible on screen during navigation between pages (+5)
- [x] The user can use search (Section 1) and browse episode lists (Section 2) while audio continues playing without interruption (+5)
- [x] Selecting a different episode replaces the current stream with the new one (no double-playback) (+5)
#### Section 4 - Memory and playlist (0 / 30)
- [ ] A playlist page exists and is reachable from the app's navigation (+5)
- [ ] The user can add an episode to the playlist from the details page or the player (+5)
- [ ] The user can remove an episode from the playlist (+5)
- [ ] The playlist contents persist across page reloads (stored in localStorage) (+5)
- [ ] The playback position of the currently playing episode is stored in localStorage (+5)
- [ ] When the user returns to a previously listened episode, playback resumes from roughly 10 seconds before the last saved position (+5)

**Total: 50 / 140**
