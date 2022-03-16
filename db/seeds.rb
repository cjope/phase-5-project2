User.create!(
    {
        first_name: "Craig",
        last_name: "Jope",
        username: "cjope",
        email: "craigjope@email.com",
        password: "123",
        password_confirmation: "123",
        age: 34,
        bio: "This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. "
    }
)

# ext-type: 1 = day, 2 = week, 3 = month, 4 = year

Item.create!(name: "Potatoes", perishable: true, extension: 5, ext_type: 2, receive_date: Date.today)
Item.create!(name: "Tomatoes", perishable: true, extension: 1, ext_type: 2, receive_date: Date.today)
Item.create!(name: "Bananas", perishable: true, extension: 1, ext_type: 2, receive_date: Date.today)
Item.create!(name: "Chips", perishable: false, extension: 3, ext_type: 3, receive_date: Date.today)
Item.create!(name: "Cookies", perishable: false, extension: 4, ext_type: 3, receive_date: Date.today)
Item.create!(name: "Milk", perishable: true, extension: 1, ext_type: 2, receive_date: Date.today)
Item.create!(name: "Soy Milk", perishable: true, extension: 10, ext_type: 1, receive_date: Date.today)



