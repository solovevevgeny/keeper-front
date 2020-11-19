export default function () {
    return [
        {
            id: 1,
            type: "Add",
            account_from_id: null,
            account_to_id: 1,
            comment: "пополнение Сбербанка на 1000",
            amount: 1000
        },
        {
            id: 2,
            type: "Add",
            account_from_id: 1,
            comment: "пополнение Сбербанка на 2000",
            amount: 2000
        },

    ]
}
