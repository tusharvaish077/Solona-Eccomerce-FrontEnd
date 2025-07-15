export const mainCategory =[
    {
        name:"Men",
        categoryId: "men",
        level:1,
        levelTwoCategory:[
            {
                "name":"Topwere",
                "categoryId":"men_topware",
                "parentCategoryId":"men",
                "level":2
            },
            {
                "name":"Bottomwere",
                "categoryId":"men_bottomwear",
                "parentCategoryId":"men",
                "level":2
            },
            {
                "name":"Footwere",
                "categoryId":"men_innerewere_and_sleepwear",
                "parentCategoryId":"men",
                "level":2
            }
        ]
    },
    {
        name:"Women",
        categoryId:"women",
        level:1,
        levelTwoCategory:[
            {
                "parentCategoryId":"women",
                "level":2,
                "name":"Indian & fusion Wear",
                "categoryId":"women_indian_and_fusion_wear"
            },
            {
                "parentCategoryId":"women",
                "level":2,
                "name":"Western wear",
                "categoryId":"women_western_wear"
            }
        ]
    },
    {
        name:"Home & Furniture",
        categoryId :"home_furniture",
        level:1
    },
    {
        name:"Electronics",
        categoryId:"electronics",
        level:1
    }
]