import ProductCard from "@/Components/ProductCard";

const sofasData = [
    {
        id: 1, name: 'Beauty Furniture Azalsa Sofa Set(3S)', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Fabric', price: '₹500', 
        // imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1719132236/website%20assets/Fabric/Azalsa%203%20Seater%20Sofa%20Set/1ssds_vv9xhc.jpg',
        images: [
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132236/website%20assets/Fabric/Azalsa%203%20Seater%20Sofa%20Set/1ssds_vv9xhc.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132218/website%20assets/Fabric/Azalsa%203%20Seater%20Sofa%20Set/2_cd_rv4msb.jpg',
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132192/website%20assets/Fabric/Azalsa%203%20Seater%20Sofa%20Set/3_xcs_bamylk.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132145/website%20assets/Fabric/Azalsa%203%20Seater%20Sofa%20Set/5cefcw_etfdpu.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132142/website%20assets/Fabric/Azalsa%203%20Seater%20Sofa%20Set/4cfew_p8oz2q.jpg'

            // Add more image URLs here if needed
        ], discount: '30', tag: 'Best Seller',
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
    },
    { id: 2, name: 'Beauty Furniture Ipoh Malaysian Sofa Set', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat. ', category: 'Fabric', price: '₹500', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1719132156/website%20assets/Fabric/Ipoh%20Malaysian%20Sofa/sf201741_3_2_qx9qpi.webp', discount: '10', tag: 'Best Seller',
        images: [
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132156/website%20assets/Fabric/Ipoh%20Malaysian%20Sofa/sf201741_3_2_qx9qpi.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132197/website%20assets/Fabric/Ipoh%20Malaysian%20Sofa/7__1_hpkruq.webp',
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132149/website%20assets/Fabric/Ipoh%20Malaysian%20Sofa/2_copy_2_9_okwfli.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132150/website%20assets/Fabric/Ipoh%20Malaysian%20Sofa/3_copy_copy_5_uhcjjs.webp'

            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
    },
    { id: 3, name: 'Beauty Furniture Panas Wing Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat. ', category: 'Fabric', price: '₹500', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1719132199/website%20assets/Fabric/Panas%20Wing%20Sofa/01_ba3da397-4b02-4938-a137-aa9511090223_v1gtwm.webp', discount: '10', tag: 'Best Seller',
        images: [
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132199/website%20assets/Fabric/Panas%20Wing%20Sofa/01_ba3da397-4b02-4938-a137-aa9511090223_v1gtwm.webp',
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132120/website%20assets/Fabric/Panas%20Wing%20Sofa/04_7546d9b3-886d-4843-84b3-f156d79a9f3b_pqt21q.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132118/website%20assets/Fabric/Panas%20Wing%20Sofa/03_f856055f-6b25-4db0-85c7-c116419a6af4_zye3ik.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132121/website%20assets/Fabric/Panas%20Wing%20Sofa/05_b25d2adc-04b7-4768-ba6d-07ed988398c2_hg6wte.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132162/website%20assets/Fabric/Panas%20Wing%20Sofa/08_faf721cc-df9c-4d22-8c08-917be2ffcbc5_nqpdzt.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132117/website%20assets/Fabric/Panas%20Wing%20Sofa/02_5261b823-efbe-4f3d-96af-e4c6ba58fb9b_iflkey.webp'
        
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    // { id: 4, name: 'Beauty Furniture L Shaped Sectional Sofa Cum Bed', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Fabric', price: '₹500', 
    //     imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1719130653/website%20assets/Fabric/L-Shaped%20Sofa%20Bed/sofa-beds_henry_qn3ddj.jpg', discount: '10', tag: 'Best Seller',
    //     images: [
    //         // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
    //         // 'https://res.cloudinary.com/dg38njbya/image/upload/v1719139867/website%20assets/Fabric/Jattebo%20U%20shaped%20Sofa/PH183253_azandx.avif',
    //         // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
    //         'https://res.cloudinary.com/dg38njbya/image/upload/v1719130653/website%20assets/Fabric/L-Shaped%20Sofa%20Bed/sofa-beds_henry_qn3ddj.jpg',
    //         'https://res.cloudinary.com/dg38njbya/image/upload/v1719130652/website%20assets/Fabric/L-Shaped%20Sofa%20Bed/data_sofa-beds_henry-right-aligned-convertible-sofa-cum-bed-with-storage-velvet-salmon-pink_new-logo_3-810x702_ehlpm6.jpg',
    //         'https://res.cloudinary.com/dg38njbya/image/upload/v1719130648/website%20assets/Fabric/L-Shaped%20Sofa%20Bed/data_sofa-beds_henry-right-aligned-convertible-sofa-cum-bed-with-storage-velvet-salmon-pink_2-810x702_f9bjns.jpg',
    //         'https://res.cloudinary.com/dg38njbya/image/upload/v1719130649/website%20assets/Fabric/L-Shaped%20Sofa%20Bed/data_sofa-beds_henry-right-aligned-convertible-sofa-cum-bed-with-storage-velvet-salmon-pink_7-810x702_phw6sr.jpg',
    //         'https://res.cloudinary.com/dg38njbya/image/upload/v1719130650/website%20assets/Fabric/L-Shaped%20Sofa%20Bed/data_sofa-beds_henry-right-aligned-convertible-sofa-cum-bed-with-storage-velvet-salmon-pink_8-810x702_slb1wq.jpg'
    //         // Add more image URLs here if needed
    //     ],
    //     ProductOverview: [
    //         {
    //             size: '3-Seater',
    //             material: 'High-Quality Fabric',
    //             dimensions: '84 x 35 x 34 inches',
    //             weight: '75 kg',
    //             warranty: '2 Years'
    //         }
    //     ]
    //  },
     { id: 4, name: 'Beauty Furniture Nathanoy L Shape Sectional Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Fabric', price: '₹500', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1719148178/website%20assets/Leatherette/Nathanoy%20L%20Shape%20Sofa/1_dgrhtejh_g287z4.jpg', discount: '10', tag: 'Best Seller',
        images: [
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1719139867/website%20assets/Fabric/Jattebo%20U%20shaped%20Sofa/PH183253_azandx.avif',
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719148178/website%20assets/Leatherette/Nathanoy%20L%20Shape%20Sofa/1_dgrhtejh_g287z4.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719148178/website%20assets/Leatherette/Nathanoy%20L%20Shape%20Sofa/3gjytfjuyrtjuy_pstzqf.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719148179/website%20assets/Leatherette/Nathanoy%20L%20Shape%20Sofa/5ngngng_tru6ym.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719148179/website%20assets/Leatherette/Nathanoy%20L%20Shape%20Sofa/4tyuuriui_n0roh2.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719148178/website%20assets/Leatherette/Nathanoy%20L%20Shape%20Sofa/2jgjtjyrjuj_q1o91b.jpg'
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    //  ________________________________________________Old Data_____________________________________________

    // { id: 5, name: 'Beauty Furniture Henry Sofa (3S)', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Fabric', price: '₹500', 
    //     imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1719130656/website%20assets/Fabric/Henry%203%20Seater%20Sofa/data_fabric-sofa_henry-fabric-sofa_olive-gold_updated_2-new-810x702_fodwwb.jpg', 
    //     discount: '10', tag: 'Best Seller',
    //     images: [
    //         // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
    //         'https://res.cloudinary.com/dg38njbya/image/upload/v1719130656/website%20assets/Fabric/Henry%203%20Seater%20Sofa/data_fabric-sofa_henry-fabric-sofa_olive-gold_updated_2-new-810x702_fodwwb.jpg',
    //         'https://res.cloudinary.com/dg38njbya/image/upload/v1719130657/website%20assets/Fabric/Henry%203%20Seater%20Sofa/data_fabric-sofa_henry-fabric-sofa_olive-gold_updated_Henry-3-Seater-Sofa-810x702_c0yjbb.jpg',
    //         'https://res.cloudinary.com/dg38njbya/image/upload/v1719130656/website%20assets/Fabric/Henry%203%20Seater%20Sofa/data_fabric-sofa_henry-fabric-sofa_olive-gold_updated_Brown-810x702_zxx0k1.jpg',
    //         'https://res.cloudinary.com/dg38njbya/image/upload/v1719130655/website%20assets/Fabric/Henry%203%20Seater%20Sofa/data_A-website-fabric-shoot_Chestnut-brown_1-810x702_cwntwx.jpg'
    //         // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
    //         // Add more image URLs here if needed
    //     ],
    //     ProductOverview: [
    //         {
    //             size: '3-Seater',
    //             material: 'High-Quality Fabric',
    //             dimensions: '84 x 35 x 34 inches',
    //             weight: '75 kg',
    //             warranty: '2 Years'
    //         }
    //     ]
    // },
        { id: 5, name: 'Beauty Furniture Fabric Sectional L Shape Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Fabric', price: '₹500', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1719130705/website%20assets/Fabric/Fabric%20Sectional%20L%20Shape%20Sofa/Fabric_Sectional_L_Shape_Sofa-Main_cic5en.webp', 
        discount: '10', tag: 'Best Seller',
        images: [
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719130705/website%20assets/Fabric/Fabric%20Sectional%20L%20Shape%20Sofa/Fabric_Sectional_L_Shape_Sofa-Main_cic5en.webp',
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1719130693/website%20assets/Fabric/Fabric%20Sectional%20L%20Shape%20Sofa/05_1f843f8c-4369-4de3-94f6-0fc7226f7303_xeusvt.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719130703/website%20assets/Fabric/Fabric%20Sectional%20L%20Shape%20Sofa/02_ee68677b-4ad4-4720-97fb-a859e715e1c9_wlvkwn.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719130695/website%20assets/Fabric/Fabric%20Sectional%20L%20Shape%20Sofa/02_245407ed-7097-4d67-b35c-74bb4f9c9abc_otyabk.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719130704/website%20assets/Fabric/Fabric%20Sectional%20L%20Shape%20Sofa/bold-yellow-147_0fdec74e-87f0-4780-a0ea-647a69e3f1ec_t3mcnz.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719130700/website%20assets/Fabric/Fabric%20Sectional%20L%20Shape%20Sofa/charcoal-grey-170_c1a94fe6-92a2-497e-8922-172bda90a41e_gybq0c.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719130699/website%20assets/Fabric/Fabric%20Sectional%20L%20Shape%20Sofa/cara-brown-137_14a70e67-a47e-4e9a-95c6-2f0d159e2ca1_fdhqf2.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719130698/website%20assets/Fabric/Fabric%20Sectional%20L%20Shape%20Sofa/blood-maroon-101_f4aaa364-b0a3-4a6d-b025-b4ecb6010daa_lmbswb.jpg'
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
    },
    { id: 6, name: 'Beauty Furniture Vedic L Shape Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Fabric', price: '₹500', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1719143945/website%20assets/Wooden%20Sofas/Vedic%20L%20Shape%20Sofa/fabric-sofa_Mellisa-fabric-sofa_l-shape_honey_rhynnq.jpg', 
        discount: '10', tag: 'Best Seller',
        images: [
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719143882/website%20assets/Wooden%20Sofas/Vedic%20L%20Shape%20Sofa/data_fabric-sofa_Mellisa-fabric-sofa_l-shape_honey_new-logo_1-810x702_yscvug.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719143890/website%20assets/Wooden%20Sofas/Vedic%20L%20Shape%20Sofa/data_fabric-sofa_Mellisa-fabric-sofa_l-shape_honey_new-logo_2-810x702_aqcfsx.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719143941/website%20assets/Wooden%20Sofas/Vedic%20L%20Shape%20Sofa/data_fabric-sofa_Mellisa-fabric-sofa_l-shape_honey_new-logo_4-810x702_stxnbn.jpg'
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 7, name: 'Beauty Furniture Nicobar Three Seater Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Fabric', price: '₹500', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1719130893/website%20assets/Fabric/Norway%20Sofa/norway-3-seater-sofa-gir-ash-front-view-copy-602547l-copy-104274_l_vccjxw.jpg', 
        discount: '10', tag: 'Best Seller',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719130893/website%20assets/Fabric/Norway%20Sofa/norway-3-seater-sofa-gir-ash-front-view-copy-602547l-copy-104274_l_vccjxw.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719130892/website%20assets/Fabric/Norway%20Sofa/norway-3-seater-sofa-gir-ash-front-three-forth--view-495556l-copy-572477_l_dwz4sl.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719130890/website%20assets/Fabric/Norway%20Sofa/norway-3-seater-sofa-gir-ash-back-three-forth-view-897882_l_zonk8s.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719130891/website%20assets/Fabric/Norway%20Sofa/norway-3-seater-sofa-gir-ash-detail--view-746997_l_yvxonx.jpg'
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
     { id: 8, name: 'Beauty Furniture Peppermint Sofa Set', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Fabric', price: '₹500', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1719132106/website%20assets/Fabric/Peppermint%20Sofa%20Set/image_35ec0c13-cd0a-438a-abea-e7cdc56f3635_1000x_ieq16p.webp', discount: '10', tag: 'Best Seller',
        images: [
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132106/website%20assets/Fabric/Peppermint%20Sofa%20Set/image_35ec0c13-cd0a-438a-abea-e7cdc56f3635_1000x_ieq16p.webp',
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132104/website%20assets/Fabric/Peppermint%20Sofa%20Set/image_0af5822e-0cc9-4a14-9413-1044ad457e0b_1800x1800_sgm1ym.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132105/website%20assets/Fabric/Peppermint%20Sofa%20Set/image_2d8ec17a-a9d0-41eb-b4fe-ae31b9480394_1800x1800_zw5xuj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132107/website%20assets/Fabric/Peppermint%20Sofa%20Set/image_dfed92b1-6982-447b-b744-bbced1c698c9_1800x1800_ckgn8o.webp',
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1719132215/website%20assets/Fabric/Balck%20Chesterfield%20Linen%20Sofa/1_ebd55bff-d25f-422f-86ca-b74877a0d9bd_800x_a3xl1r.webp'
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },

    { id: 9, name: 'Beauty Furniture Black Chesterfield Linen Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Fabric', price: '₹500', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1719132208/website%20assets/Fabric/Balck%20Chesterfield%20Linen%20Sofa/4_3b6d6ef9-4daa-496d-af6e-425e5d076108_800x_yszlvx.webp', discount: '10', tag: 'Best Seller',
        images: [
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132208/website%20assets/Fabric/Balck%20Chesterfield%20Linen%20Sofa/4_3b6d6ef9-4daa-496d-af6e-425e5d076108_800x_yszlvx.webp',
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132175/website%20assets/Fabric/Balck%20Chesterfield%20Linen%20Sofa/2_c1153f20-9aca-4630-99c6-03190d5f39c0_800x_haulnz.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132096/website%20assets/Fabric/Balck%20Chesterfield%20Linen%20Sofa/6_cb3b9a72-ad88-4ddf-b30b-312bf487e5fb_800x_reejmt.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132209/website%20assets/Fabric/Balck%20Chesterfield%20Linen%20Sofa/5_fc1b4e6b-ab0e-48b0-bbb7-ca2c9bf874ed_800x_f2cch4.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132215/website%20assets/Fabric/Balck%20Chesterfield%20Linen%20Sofa/1_ebd55bff-d25f-422f-86ca-b74877a0d9bd_800x_a3xl1r.webp'
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
        { id: 10, name: 'Beauty Furniture Kia Modern Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Fabric', price: '₹500', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1719132163/website%20assets/Fabric/Kia%20Modern%20Sofa%20Set/undef_src_sa_picid_732200_x_1000_type_color_image_1024x1024_207f11db-f5bf-4c73-a4d0-fc8e767ca322_1000x_pnemvg.webp', discount: '10', tag: 'Best Seller',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132163/website%20assets/Fabric/Kia%20Modern%20Sofa%20Set/undef_src_sa_picid_732200_x_1000_type_color_image_1024x1024_207f11db-f5bf-4c73-a4d0-fc8e767ca322_1000x_pnemvg.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132098/website%20assets/Fabric/Kia%20Modern%20Sofa%20Set/undef_src_sa_picid_732204_x_1000_type_whitesh_image_1024x1024_fa01544b-f173-404b-8927-00f64603e157_1800x1800_e2mmod.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132099/website%20assets/Fabric/Kia%20Modern%20Sofa%20Set/undef_src_sa_picid_732212_x_1800_type_whitesh_imagegt_1024x1024_9c5ff297-159d-474f-be0c-de7f855e3d19_1800x1800_eaijlf.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132245/website%20assets/Fabric/Kia%20Modern%20Sofa%20Set/undef_src_sa_picid_732223_x_1800_type_whitesh_image_1024x1024_7e69b24d-d570-47c2-bffa-cd11b30269b2_1800x1800_t2jew5.webp'
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 11, name: 'Beauty Furniture Azalsa Sofa Set(3S)', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Fabric', price: '₹500', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1719132236/website%20assets/Fabric/Azalsa%203%20Seater%20Sofa%20Set/1ssds_vv9xhc.jpg', 
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132236/website%20assets/Fabric/Azalsa%203%20Seater%20Sofa%20Set/1ssds_vv9xhc.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132218/website%20assets/Fabric/Azalsa%203%20Seater%20Sofa%20Set/2_cd_rv4msb.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132192/website%20assets/Fabric/Azalsa%203%20Seater%20Sofa%20Set/3_xcs_bamylk.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132192/website%20assets/Fabric/Azalsa%203%20Seater%20Sofa%20Set/3_xcs_bamylk.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132142/website%20assets/Fabric/Azalsa%203%20Seater%20Sofa%20Set/4cfew_p8oz2q.jpg'
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ],
        discount: '10', tag: 'Best Seller'
     },
    { id: 12, name: 'Beauty Furniture Azalsa Sofa Set(3S)', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Wooden', price: '₹700', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1719132234/website%20assets/Fabric/Azalsa%203%20Seater%20Sofa%20Set/1_furny_azalsa_3_seater_velvet_fabric_sofa_set_berry_red__hxeodv.jpg', discount: '10', tag: 'Best Seller',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132234/website%20assets/Fabric/Azalsa%203%20Seater%20Sofa%20Set/1_furny_azalsa_3_seater_velvet_fabric_sofa_set_berry_red__hxeodv.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132190/website%20assets/Fabric/Azalsa%203%20Seater%20Sofa%20Set/2furny_azalsa_3_seater_velvet_fabric_sofa_set_berry_red__b0lyte.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719132144/website%20assets/Fabric/Azalsa%203%20Seater%20Sofa%20Set/4_furny_azalsa_3_seater_velvet_fabric_sofa_set_berry_red__h1wk1z.jpg'
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
     { id: 13, name: 'Beauty Furniture L Shaped Sectional Sofa Cum Bed', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Fabric', price: '₹500', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1719130653/website%20assets/Fabric/L-Shaped%20Sofa%20Bed/sofa-beds_henry_qn3ddj.jpg', discount: '10', tag: 'Best Seller',
        images: [
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1719139867/website%20assets/Fabric/Jattebo%20U%20shaped%20Sofa/PH183253_azandx.avif',
            // 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719130653/website%20assets/Fabric/L-Shaped%20Sofa%20Bed/sofa-beds_henry_qn3ddj.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719130652/website%20assets/Fabric/L-Shaped%20Sofa%20Bed/data_sofa-beds_henry-right-aligned-convertible-sofa-cum-bed-with-storage-velvet-salmon-pink_new-logo_3-810x702_ehlpm6.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719130648/website%20assets/Fabric/L-Shaped%20Sofa%20Bed/data_sofa-beds_henry-right-aligned-convertible-sofa-cum-bed-with-storage-velvet-salmon-pink_2-810x702_f9bjns.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719130649/website%20assets/Fabric/L-Shaped%20Sofa%20Bed/data_sofa-beds_henry-right-aligned-convertible-sofa-cum-bed-with-storage-velvet-salmon-pink_7-810x702_phw6sr.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719130650/website%20assets/Fabric/L-Shaped%20Sofa%20Bed/data_sofa-beds_henry-right-aligned-convertible-sofa-cum-bed-with-storage-velvet-salmon-pink_8-810x702_slb1wq.jpg'
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 14, name: 'Beauty Furniture Elizalina L Shape Sofa(3 + 2S)', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Wooden', price: '₹700', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1719148172/website%20assets/Leatherette/Elizalina%205%20Seater%20L%20Shape%20Sofa/1_226_5_psxars.jpg', discount: '10', tag: 'Best Seller',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719148172/website%20assets/Leatherette/Elizalina%205%20Seater%20L%20Shape%20Sofa/1_226_5_psxars.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719148173/website%20assets/Leatherette/Elizalina%205%20Seater%20L%20Shape%20Sofa/2_218_4_vfw9yj.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719148173/website%20assets/Leatherette/Elizalina%205%20Seater%20L%20Shape%20Sofa/3_215_4_d3e3ze.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719148173/website%20assets/Leatherette/Elizalina%205%20Seater%20L%20Shape%20Sofa/4_188_5_lw8kao.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719148173/website%20assets/Leatherette/Elizalina%205%20Seater%20L%20Shape%20Sofa/5_172_5_w4k1kf.jpg',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1719148173/website%20assets/Leatherette/Elizalina%205%20Seater%20L%20Shape%20Sofa/6_142_3_u5jxiu.jpg'
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 15, name: 'Beauty Furniture Sepang Sofa Set', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Wooden', price: '₹700', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636865/website%20assets/wooden%20sofa/pn5neghgckc6bnfkkgtk.webp', discount: '10', tag: 'New Arrival',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 16, name: 'Beauty Furniture Ipoh Malaysian Sofa Set', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Wooden', price: '₹700', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636865/website%20assets/wooden%20sofa/wcyyh6lbm2edamxzurvb.webp', discount: '10', tag: 'New Arrival',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 17, name: 'Beauty Furniture Henry Sofa (3S)', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Wooden', price: '₹700', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636866/website%20assets/wooden%20sofa/qcxc5momkzkxhprcsoaw.webp', discount: '10', tag: 'New Arrival',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 18, name: 'Beauty Furniture Curved Sofa(3S)', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Wooden', price: '₹700', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636866/website%20assets/wooden%20sofa/ybmj9of8auaqfey1cdd6.webp', discount: '10', tag: 'New Arrival',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 19, name: 'Beauty Furniture Convertible Sofa cum bed', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Leatherette', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636843/website%20assets/leatherette%20sofa/dq5k0ocxcc5c3xbkh0d3.webp', discount: '10', tag: 'New Arrival',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 20, name: 'Beauty Furniture Empero Premium Velvet L shape Sofa(3 + 2S)', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Leatherette', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636843/website%20assets/leatherette%20sofa/oud2d2o97cnnjr3cec8e.webp', discount: '10', tag: 'New Arrival',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 21, name: 'Beauty Furniture Aleandro Fabric L shape Sofa(3 + 2S)', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Leatherette', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636844/website%20assets/leatherette%20sofa/q3qiluvuurt0ifm0dmiw.webp', discount: '10', tag: 'New Arrival',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 22, name: 'Beauty Furniture Nathanoy L Shape Sectional Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Leatherette', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636844/website%20assets/leatherette%20sofa/faymmhvbnvinmdulw7yq.webp', discount: '10', tag: 'New Arrival',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 23, name: 'Beauty Furniture Orlando L Shape Sofa(3 + 2S)', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Leatherette', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636844/website%20assets/leatherette%20sofa/ex7nsnt2zs0hfde0flg1.webp', discount: '10', tag: 'New Arrival',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 24, name: 'Beauty Furniture Brayden One Seater Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Leatherette', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636844/website%20assets/leatherette%20sofa/cys5cm17eyqmjsyxd8du.webp', discount: '10', tag: 'New Arrival',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 25, name: 'Beauty Furniture Azalsa Sofa Set(3S)', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Leatherette', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636845/website%20assets/leatherette%20sofa/u1yblzo04ibehvantjbn.webp', discount: '10', tag: 'New Arrival',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 26, name: 'Beauty Furniture Elizalina L Shape Sofa(3 + 2S)', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Leatherette', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636845/website%20assets/leatherette%20sofa/gtqlgvzmqupqdqc4no1d.webp', discount: '10', tag: 'New Arrival',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 27, name: 'Beauty Furniture Nicobar Three Seater Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Leather', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636837/website%20assets/leather%20sofa/xf5otfqo5lvbttgwx7hh.webp', discount: '10', tag: 'New Arrival',     
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
    },
    { id: 28, name: 'Beauty Furniture Berlin L shape Sofa(3 + 2S)', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Leather', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636837/website%20assets/leather%20sofa/buowh2hdx5adeonjibv3.webp', discount: '10', tag: 'New Arrival',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 29, name: 'Beauty Furniture Geneva Corner Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Leather', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636837/website%20assets/leather%20sofa/eemwoeh9tnlhcuvb4kno.webp', discount: '10', tag: 'New Arrival',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 30, name: 'Beauty Furniture Texas L shape Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Leather', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636838/website%20assets/leather%20sofa/owe3j4cgenrjkrrhhwux.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 31, name: 'Beauty Furniture Panas Wing Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Leather', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636838/website%20assets/leather%20sofa/iz3mewiuhztgqf1hyvmx.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
    },
    { id: 32, name: 'Beauty Furniture Fabric Sectional L Shape Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Leather', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636839/website%20assets/leather%20sofa/kkwdsq3plgbplk9nd9sh.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 33, name: 'Beauty Furniture Relexo Premium Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Leather', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636838/website%20assets/leather%20sofa/arev9svx7suihpazdnav.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { 
            id: 34, 
            name: 'Beauty Furniture Kelly Sofa(2S)', 
            description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', 
            category: 'Leather', 
            price: '₹600', 
            imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636839/website%20assets/leather%20sofa/zmbkfzxwxoksf7nglifh.webp', 
            discount: '10', 
            images: [
                'https://res.cloudinary.com/dg38njbya/image/upload/v1716636839/website%20assets/leather%20sofa/zmbkfzxwxoksf7nglifh.webp'
            ],
            ProductOverview: [
                {
                    size: '2-Seater',
                    material: 'Leather',
                    dimensions: 'Dimensions not specified',
                    weight: 'Weight not specified',
                    warranty: 'Warranty not specified'
                }
            ]
        },
        { 
            id: 35, 
            name: 'Beauty Furniture Rolex Tufted Sofa Set', 
            description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', 
            category: 'Leather', 
            price: '₹600', 
            imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636838/website%20assets/leather%20sofa/hlyx2rfvqjlh8u0uayim.webp', 
            discount: '10', 
            images: [
                'https://res.cloudinary.com/dg38njbya/image/upload/v1716636838/website%20assets/leather%20sofa/hlyx2rfvqjlh8u0uayim.webp'
            ],
            ProductOverview: [
                {
                    size: 'Not specified',
                    material: 'Leather',
                    dimensions: 'Dimensions not specified',
                    weight: 'Weight not specified',
                    warranty: 'Warranty not specified'
                }
            ]
        },
        { 
            id: 36, 
            name: 'Beauty Furniture Jack & Hill Sofa Set', 
            description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', 
            category: 'Leather', 
            price: '₹600', 
            imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636838/website%20assets/leather%20sofa/eyxvedtyk3upoqhpifhi.webp', 
            discount: '10', 
            images: [
                'https://res.cloudinary.com/dg38njbya/image/upload/v1716636838/website%20assets/leather%20sofa/eyxvedtyk3upoqhpifhi.webp'
            ],
            ProductOverview: [
                {
                    size: 'Not specified',
                    material: 'Leather',
                    dimensions: 'Dimensions not specified',
                    weight: 'Weight not specified',
                    warranty: 'Warranty not specified'
                }
            ]
        },
        { 
            id: 37, 
            name: 'Beauty Furniture Peppermint Sofa Set', 
            description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', 
            category: 'Sofa Bed', 
            price: '₹600', 
            imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636859/website%20assets/sofacumbed/j5i3ymylfudkbextcww9.webp', 
            discount: '10', 
            images: [
                'https://res.cloudinary.com/dg38njbya/image/upload/v1716636859/website%20assets/sofacumbed/j5i3ymylfudkbextcww9.webp'
            ],
            ProductOverview: [
                {
                    size: 'Not specified',
                    material: 'Not specified',
                    dimensions: 'Dimensions not specified',
                    weight: 'Weight not specified',
                    warranty: 'Warranty not specified'
                }
            ]
        },
        { 
            id: 38, 
            name: 'Beauty Furniture Boombox Sofa Set(3S)', 
            description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', 
            category: 'Sofa Bed', 
            price: '₹600', 
            imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636859/website%20assets/sofacumbed/egjpjnbvfl3afta8txdv.webp', 
            discount: '10', 
            images: [
                'https://res.cloudinary.com/dg38njbya/image/upload/v1716636859/website%20assets/sofacumbed/egjpjnbvfl3afta8txdv.webp'
            ],
            ProductOverview: [
                {
                    size: 'Not specified',
                    material: 'Not specified',
                    dimensions: 'Dimensions not specified',
                    weight: 'Weight not specified',
                    warranty: 'Warranty not specified'
                }
            ]
        },
        { 
            id: 39, 
            name: 'Beauty Furniture Marine Sofa Cum Bed', 
            description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', 
            category: 'Sofa Bed', 
            price: '₹600', 
            imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636859/website%20assets/sofacumbed/cmqqieoyydo2x5ydmbek.webp', 
            discount: '10', 
            images: [
                'https://res.cloudinary.com/dg38njbya/image/upload/v1716636859/website%20assets/sofacumbed/cmqqieoyydo2x5ydmbek.webp'
            ],
            ProductOverview: [
                {
                    size: 'Not specified',
                    material: 'Not specified',
                    dimensions: 'Dimensions not specified',
                    weight: 'Weight not specified',
                    warranty: 'Warranty not specified'
                }
            ]
        },
        { 
            id: 40, 
            name: 'Beauty Furniture Ronaldo Chesterfield Sofa Set', 
            description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', 
            category: 'Sofa Bed', 
            price: '₹600', 
            imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636859/website%20assets/sofacumbed/ryecg4bazih02hp27atl.webp', 
            discount: '10', 
            images: [
                'https://res.cloudinary.com/dg38njbya/image/upload/v1716636859/website%20assets/sofacumbed/ryecg4bazih02hp27atl.webp'
            ],
            ProductOverview: [
                {
                    size: 'Not specified',
                    material: 'Not specified',
                    dimensions: 'Dimensions not specified',
                    weight: 'Weight not specified',
                    warranty: 'Warranty not specified'
                }
            ]
        },
        { 
            id: 41, 
            name: 'Beauty Furniture Kia Modern Sofa Set', 
            description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', 
            category: 'Sofa Bed', 
            price: '₹600', 
            imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636860/website%20assets/sofacumbed/uybmjc8wpsfuwahusymd.webp', 
            discount: '10', 
            images: [
                'https://res.cloudinary.com/dg38njbya/image/upload/v1716636860/website%20assets/sofacumbed/uybmjc8wpsfuwahusymd.webp'
            ],
            ProductOverview: [
                {
                    size: 'Not specified',
                    material: 'Not specified',
                    dimensions: 'Dimensions not specified',
                    weight: 'Weight not specified',
                    warranty: 'Warranty not specified'
                }
            ]
        },
        { 
            id: 42, 
            name: 'Beauty Furniture Mindtree Sofa Set', 
            description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', 
            category: 'Sofa Bed', 
            price: '₹600', 
            imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636861/website%20assets/sofacumbed/ihf8dgwnxfxu4pbdg8ji.webp', 
            discount: '10', 
            images: [
                'https://res.cloudinary.com/dg38njbya/image/upload/v1716636861/website%20assets/sofacumbed/ihf8dgwnxfxu4pbdg8ji.webp'
            ],
            ProductOverview: [
                {
                    size: 'Not specified',
                    material: 'Not specified',
                    dimensions: 'Dimensions not specified',
                    weight: 'Weight not specified',
                    warranty: 'Warranty not specified'
                }
            ]
        },
        { 
            id: 43, 
            name: 'Beauty Furniture Undercover Sofa Bed Set', 
            description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', 
            category: 'Sofa Bed', 
            price: '₹600', 
            imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636861/website%20assets/sofacumbed/itcc7opoukfj5kkz6gx2.webp', 
            discount: '10', 
            images: [
                'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
                'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
                // Add more image URLs here if needed
            ],
            ProductOverview: [
                {
                    size: '3-Seater',
                    material: 'High-Quality Fabric',
                    dimensions: '84 x 35 x 34 inches',
                    weight: '75 kg',
                    warranty: '2 Years'
                }
            ]
        },    
    { id: 44, name: 'Beauty Furniture Roll Arm Leather Sofa(3S)', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Sofa Set', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636854/website%20assets/sofa%20set/qatl1ebbufza7ofcbghj.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 45, name: 'Beauty Furniture Bonn Signature Sofa(3S)', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Sofa Set', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636854/website%20assets/sofa%20set/zl9qdi6urrakkouwp353.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 46, name: 'Beauty Furniture Texas Signature Sofa Set', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Sofa Set', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636854/website%20assets/sofa%20set/hxhtq7vvrdm3dpcf1cwi.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 47, name: 'Beauty Furniture Leatherette 3 Seater Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Sofa Set', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636855/website%20assets/sofa%20set/ir7vbzdzu20hmf3sud81.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 48, name: 'Beauty Furniture Lorraine Sofa(3S)', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Sofa Set', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636855/website%20assets/sofa%20set/qohwdvrditixv2gqzmq6.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 49, name: 'Beauty Furniture Julian Sofa Set', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Sofa Set', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636855/website%20assets/sofa%20set/ovuy954wwagzfcnu7w9w.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 50, name: 'Beauty Furniture Leatherette Sectional Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Sofa Set', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636856/website%20assets/sofa%20set/xxznhib6lmhdxpl0hesk.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 51, name: 'Beauty Furniture Wooden Valvet Grey Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Corner Sofa', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636824/website%20assets/corner%20sofa/nnkjvzqglpmlkvcfh1t9.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 52, name: 'Beauty Furniture Black Chesterfield Linen Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Corner Sofa', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636824/website%20assets/corner%20sofa/q82fhlbgrd3sgwax09ht.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 53, name: 'Beauty Furniture Debra Sectional Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Corner Sofa', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636824/website%20assets/corner%20sofa/uvyvdvzdsr5raabwwwhu.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 54, name: 'Beauty Furniture Maria Wooden Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Corner Sofa', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636824/website%20assets/corner%20sofa/swu84syetdxwssazat4y.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 55, name: 'Beauty Furniture Texas Wooden Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Corner Sofa', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636824/website%20assets/corner%20sofa/k7ooj8iksdo5bxmbvxgh.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 56, name: 'Beauty Furniture Vedic L Shape Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Corner Sofa', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636825/website%20assets/corner%20sofa/jvsfesay2fv0pi4l3fx7.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 57, name: 'Beauty Furniture Relaxing Longue Chaise Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Corner Sofa', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636825/website%20assets/corner%20sofa/eynhyvtmq1k8smbnhnry.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 58, name: 'Beauty Furniture Peach Comfy Love Seat', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Corner Sofa', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636824/website%20assets/corner%20sofa/sxetxn3bmdeb6ii65qx9.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 59, name: 'Beauty Furniture L Shaped Sectional Sofa Cum Bed', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Corner Sofa', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636825/website%20assets/corner%20sofa/r3garkledzctlweb3oex.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 60, name: 'Beauty Furniture Bardhyl Fabric Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Premium Sofa', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636850/website%20assets/premium%20sofa/eggk9uoxp464ekepcham.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 61, name: 'Beauty Furniture Adlai Velvet Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Premium Sofa', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636849/website%20assets/premium%20sofa/rmain7ppevfnemcicp1q.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 62, name: 'Beauty Furniture Cyano Chesterfield Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Premium Sofa', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636850/website%20assets/premium%20sofa/cuoeygtimbhsbwso7dx2.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 63, name: 'Beauty Furniture Vimle Chaise Longue Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Premium Sofa', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636849/website%20assets/premium%20sofa/xrcgzouwtzhjmxtyb1qu.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 64, name: 'Beauty Furniture Jattebo U shaped Sofa', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Premium Sofa', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636849/website%20assets/premium%20sofa/lxhpc0wvlynik4d2mfyq.webp', discount: '10',
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
     },
    { id: 65, name: 'Beauty Furniture Jattebo Seater Sofa Set', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Premium Sofa', price: '₹600', 
        imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636849/website%20assets/premium%20sofa/lsqarfb2ntcebd9ovbb7.webp', discount: '10' ,
        images: [
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp',
            'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp',
            // Add more image URLs here if needed
        ],
        ProductOverview: [
            {
                size: '3-Seater',
                material: 'High-Quality Fabric',
                dimensions: '84 x 35 x 34 inches',
                weight: '75 kg',
                warranty: '2 Years'
            }
        ]
    },
    // { id: 66, name: 'Sofa 7', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Premium Sofa', price: '₹600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636848/website%20assets/premium%20sofa/zu3zrksbtskxhjdwcozp.webp', discount: '10' },
    // { id: 67, name: 'Sofa 8', description: 'Elevate your home spa experience with Beauty Furniture. Our luxurious furniture is designed for comfort, function, and timeless style. From plush vanities to adjustable stools, discover everything you need to create your perfect beauty retreat.', category: 'Premium Sofa', price: '₹600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636848/website%20assets/premium%20sofa/dphxjo7swhdu6i3sa0nd.webp', discount: '10' },
    
];


export default sofasData;