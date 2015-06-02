#Up For Grabs
**Work in progress**

<!-- This app is designed to solve the problem of an overcrowded closet... which is a problem I have. So very bad. Anywhoooooo ugh. SOO:

An application for cataloging(sp??), sharing, and ultimately getting rid of unwanted clothing items. -->

##Specifications

###User stories/Features

####Guest Features

1. Guests can view the application's home page to see information about the app itself and access _limited_ functionality.
2. Guests can view public collections, or 'closets', of registered users, which contain clothing items users would like to give away.
3. Guests can search clothing items and browse what's been put up for freesies.
4. Guests can create user accounts using their email address.
  - Verification??

####User Features

All Guest features, plus:

1. **Users can customize their profiles with:**
  - An avatar,
  - Email address (kept private),
  - Display name,
  - Location (general, kept private), and
  - "About" section.

  All fields except for username are optional.

2. **Users can request a lost password.**

3. **Users can create new clothing items to be added to their "closet".**

  Each item will include:
  - A photo of the clothing item,
  - The item's size,
  - Item's color,
  - Description/notes,
  - Expiration date* (default 2 months), and
  - Tags for any additional classifiers including material, brand, occasion, etc.

  Item photo, size, and color are required; other fields are optional.
  - **Users can take photos using their cell phone cameras OR upload them from their computer.**

  _*See feature #5._

4. **Users can mark any of their clothing items as "no longer available."**
  - This will move the item out of their closet and into a "previous items" category. Items in this category wil not show up in browse/search views or when viewing the user's closet, but can be made available again.

5. **Users can set an "expiration date" for each item in their closet.**
  - After this date, the item will be marked as "no longer available."
  - If the user has an item or items in their closet that will expire in several days, they will receive an email reminding them, along with links to organizations in their area that accept clothing donations.

6. **Users can share what they want to give away on Facebook as a link to their closet.**

7. **Users can add items from others' collections to their "Watch" or "Wish" list.**
  - Users are alerted via email if the item is expiring soon or if it is no longer available.

8. **Users can `favorite` another user's entire closet.**
  - User can then view and easily navigate to any of their favorited closets.

9. **Users will be able to `request` items that another user has put up for giveaway.**
  - This request will include a message from the requesting user.
  - The recipient will be able to reply to this message in order to confirm or deeeeny.

9. **Users will have access to a message "inbox,"** containing:
  - Requests to take their unwanted clothing item,
  - Alerts when someone has favorited their closet, and
  - Alerts when an item has expired.

<!-- ####Admin Features??? -->

####Data Structure

#####Resources:
  - User Accounts
    - Favorites
    - Wishlist Items
    - User's Own Closets
    - User's Own Clothing Items
  - All Closets
  - All Items
    - Item Tags
  - All Tags
  - Messages


#####ERD

![img](/img/UpForGrabsERD.png)

####Technologies

Server Side - Ruby Gems

- sendgrid
- mustache
- jQuery
- backbone & underscore
- Ruby on Rails (zoooom)
- paperclip

Client Side JS

CSS

- [Pure CSS](http://purecss.io/)
