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

Item.create!(name: "Potatoes", perishable: true, extension: 5, ext_type: 2, receive_date: Date.today)