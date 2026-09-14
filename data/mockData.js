// BỘ DỮ LIỆU DEMO TỐI THIỂU (MINIMUM DATASET) - THEO REQUIREMENTS.MD MỤC 10.1

export const authors = [
  {
    id: 'author-1',
    name: 'Nguyễn Hoàng Nam',
    role: 'Trưởng ban Đánh giá Công nghệ',
    bio: 'Hơn 10 năm kinh nghiệm thử nghiệm thiết bị điện tử, laptop và các sản phẩm công nghệ cá nhân.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    credentials: 'Cựu Senior Editor tại TechMag, B.S. Điện tử Viễn thông'
  },
  {
    id: 'author-2',
    name: 'Trần Thị Mai',
    role: 'Chuyên gia Đồ Gia dụng & Đời sống',
    bio: 'Chuyên gia thử nghiệm và đánh giá hơn 300+ thiết bị nhà bếp, đồ gia dụng thông minh phục vụ gia đình.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    credentials: 'Blogger Ẩm thực & Gia dụng, 8 năm kinh nghiệm đánh giá sản phẩm'
  },
  {
    id: 'author-3',
    name: 'Lê Quang Huy',
    role: 'Chuyên gia Phần mềm & Trí tuệ nhân tạo',
    bio: 'Kỹ sư phần mềm phân tích sâu về các mô hình AI, hạ tầng đám mây, SaaS và bảo mật mạng.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    credentials: 'M.S. Khoa học Máy tính, Cố vấn chuyển đổi số doanh nghiệp'
  }
];

export const categories = [
  // 4 Danh mục vật lý
  {
    id: 'cat-1',
    name: 'Gia dụng & Nhà bếp',
    slug: 'gia-dung',
    group: 'vat-ly',
    desc: 'Nồi chiên không dầu, robot hút bụi, máy lọc không khí và đồ gia dụng thông minh.',
    icon: 'home',
    featured: true,
    subcategories: [
      { name: 'Nồi chiên không dầu', slug: 'noi-chien' },
      { name: 'Robot hút bụi', slug: 'robot-hut-bui' },
      { name: 'Máy lọc không khí', slug: 'may-loc-khong-khi' }
    ]
  },
  {
    id: 'cat-2',
    name: 'Thiết bị Điện tử',
    slug: 'dien-tu',
    group: 'vat-ly',
    desc: 'Laptop, tai nghe không dây, đồng hồ thông minh và phụ kiện công nghệ.',
    icon: 'laptop',
    featured: true,
    subcategories: [
      { name: 'Laptop văn phòng', slug: 'laptop' },
      { name: 'Tai nghe không dây', slug: 'tai-nghe' },
      { name: 'Đồng hồ thông minh', slug: 'smartwatch' }
    ]
  },
  {
    id: 'cat-3',
    name: 'Thời trang & Phụ kiện',
    slug: 'thoi-trang',
    group: 'vat-ly',
    desc: 'Giày thể thao, đồng hồ đeo tay, balo và phụ kiện thời trang cao cấp.',
    icon: 'shirt',
    featured: false,
    subcategories: [
      { name: 'Giày thể thao', slug: 'giay-the-thao' },
      { name: 'Balo laptop', slug: 'balo' }
    ]
  },
  {
    id: 'cat-4',
    name: 'Sức khỏe & Làm đẹp',
    slug: 'suc-khoe',
    group: 'vat-ly',
    desc: 'Máy đo huyết áp, máy massage, bàn chải điện và thiết bị chăm sóc cá nhân.',
    icon: 'heart',
    featured: false,
    subcategories: [
      { name: 'Bàn chải điện', slug: 'ban-chai-dien' },
      { name: 'Máy massage', slug: 'may-massage' }
    ]
  },

  // 4 Danh mục số
  {
    id: 'cat-5',
    name: 'Công cụ AI',
    slug: 'cong-cu-ai',
    group: 'so',
    desc: 'Trợ lý AI, chatbot thông minh, AI tạo ảnh và tự động hóa công việc.',
    icon: 'chip',
    featured: true,
    subcategories: [
      { name: 'Trợ lý AI & Chatbot', slug: 'tro-ly-ao' },
      { name: 'AI tạo hình ảnh', slug: 'tao-anh-ai' },
      { name: 'AI viết nội dung', slug: 'viet-noi-dung' }
    ]
  },
  {
    id: 'cat-6',
    name: 'Phần mềm & SaaS',
    slug: 'phan-mem',
    group: 'so',
    desc: 'Công cụ quản lý công việc, thiết kế đồ họa, CRM và ứng dụng văn phòng.',
    icon: 'code',
    featured: true,
    subcategories: [
      { name: 'Quản lý dự án & Ghi chú', slug: 'quan-ly-du-an' },
      { name: 'Thiết kế đồ họa', slug: 'thiet-ke' }
    ]
  },
  {
    id: 'cat-7',
    name: 'Hosting & Tên miền',
    slug: 'hosting',
    group: 'so',
    desc: 'Web hosting, VPS đám mây, WordPress hosting và máy chủ chuyên dụng.',
    icon: 'server',
    featured: false,
    subcategories: [
      { name: 'Cloud Hosting', slug: 'cloud-hosting' },
      { name: 'VPS giá rẻ', slug: 'vps' }
    ]
  },
  {
    id: 'cat-8',
    name: 'VPN & An ninh mạng',
    slug: 'vpn',
    group: 'so',
    desc: 'Mạng riêng ảo VPN, phần mềm diệt virus và bảo mật dữ liệu trực tuyến.',
    icon: 'shield',
    featured: false,
    subcategories: [
      { name: 'VPN cá nhân', slug: 'vpn-ca-nhan' },
      { name: 'Antivirus', slug: 'antivirus' }
    ]
  },

  // 2 Danh mục vật lý mở rộng
  {
    id: 'cat-9',
    name: 'Mẹ & Bé',
    slug: 'me-be',
    group: 'vat-ly',
    desc: 'Máy tiệt trùng, bình sữa thông minh, máy hút sữa và xe đẩy cho bé.',
    icon: 'baby',
    featured: false,
    subcategories: [
      { name: 'Máy tiệt trùng bình sữa', slug: 'may-tiet-trung' },
      { name: 'Xe đẩy & Ghế ngồi ô tô', slug: 'xe-day' }
    ]
  },
  {
    id: 'cat-10',
    name: 'Thể Thao & Dã Ngoại',
    slug: 'the-thao',
    group: 'vat-ly',
    desc: 'Dụng cụ thể hình tại nhà, đồ dã ngoại cắm trại và phụ kiện thể thao.',
    icon: 'sports',
    featured: false,
    subcategories: [
      { name: 'Dụng cụ tập thể hình tại nhà', slug: 'tap-gym' },
      { name: 'Đồ dã ngoại & lều trại', slug: 'da-ngoai' }
    ]
  },

  // 2 Danh mục số mở rộng
  {
    id: 'cat-11',
    name: 'Ứng Dụng & Tiện Ích',
    slug: 'ung-dung',
    group: 'so',
    desc: 'Ứng dụng quản lý tài chính, ghi chú thông minh và tiện ích số tiện lợi.',
    icon: 'app',
    featured: false,
    subcategories: [
      { name: 'Ứng dụng ghi chú & Notion', slug: 'ghi-chu' },
      { name: 'Quản lý tài chính cá nhân', slug: 'tai-chinh' }
    ]
  },
  {
    id: 'cat-12',
    name: 'Marketing & Khóa Học Số',
    slug: 'marketing',
    group: 'so',
    desc: 'Email marketing tự động, công cụ SEO website và khóa học kỹ năng số.',
    icon: 'chart',
    featured: false,
    subcategories: [
      { name: 'Email Marketing tự động', slug: 'email-marketing' },
      { name: 'Nghiên cứu từ khóa & SEO', slug: 'seo-analytics' },
      { name: 'Khóa học lập trình & AI', slug: 'lap-trinh' }
    ]
  }
];

export const products = [
  // 6 Sản phẩm vật lý
  {
    id: 'prod-1',
    name: 'Aircook Pro 6L',
    slug: 'aircook-pro-6l',
    type: 'vat-ly',
    categorySlug: 'gia-dung',
    subCategorySlug: 'noi-chien',
    brand: 'AirCook',
    summary: 'Nồi chiên không dầu dung tích lớn 6L, công nghệ Rapid Air giảm 85% lượng dầu mỡ.',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80',
    overallScore: 9.5,
    priceRef: '2.490.000đ',
    currency: 'VND',
    status: 'Published',
    updatedAt: '12/09/2026',
    scores: [
      { criterion: 'Hiệu năng nấu & Độ giòn', value: 9.6 },
      { criterion: 'Thiết kế & Dễ vệ sinh', value: 9.4 },
      { criterion: 'Tính năng & Bảng điều khiển', value: 9.5 },
      { criterion: 'Độ bền & An toàn', value: 9.3 },
      { criterion: 'Giá trị / Giá thành', value: 9.7 }
    ],
    pros: [
      'Công suất mạnh 1800W, thức ăn chín đều vàng giòn',
      'Lòng nồi tráng men gốm Ceramic chống dính an toàn',
      '8 chế độ cài đặt sẵn tiện dụng cho gia đình',
      'Độ ồn thấp khi vận hành'
    ],
    cons: [
      'Kích thước thân máy hơi to, tốn diện tích bếp nhỏ',
      'Dây nguồn hơi ngắn (1 mét)'
    ],
    specs: {
      'Dung tích': '6.0 Lít',
      'Công suất': '1800W',
      'Công nghệ': 'Rapid Heat 360 độ',
      'Chất liệu lòng nồi': 'Gốm Ceramic không chứa PFOA',
      'Bảo hành': '24 tháng chính hãng'
    },
    officialUrl: 'https://aircook.example.com'
  },
  {
    id: 'prod-2',
    name: 'SoundMax Air',
    slug: 'soundmax-air',
    type: 'vat-ly',
    categorySlug: 'dien-tu',
    subCategorySlug: 'tai-nghe',
    brand: 'SoundMax',
    summary: 'Tai nghe True Wireless chống ồn chủ động ANC Hybrid với thời lượng pin lên đến 36 giờ.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80',
    overallScore: 9.2,
    priceRef: '1.990.000đ',
    currency: 'VND',
    status: 'Published',
    updatedAt: '10/09/2026',
    scores: [
      { criterion: 'Chất âm & Âm trầm', value: 9.2 },
      { criterion: 'Khả năng chống ồn ANC', value: 9.0 },
      { criterion: 'Thời lượng Pin', value: 9.5 },
      { criterion: 'Độ thoải mái khi đeo', value: 9.3 },
      { criterion: 'Giá trị trong tầm giá', value: 9.4 }
    ],
    pros: [
      'Chống ồn chủ động sâu lên tới -42dB',
      'Âm trầm sâu, dải mid trong trẻo rõ nét',
      'Thời lượng pin 8h (tai lẻ) + 28h (hộp sạc)',
      'Hỗ trợ sạc không dây Qi'
    ],
    cons: [
      'Ứng dụng tùy chỉnh EQ còn hơi đơn giản trên iOS',
      'Hộp sạc bóng dễ bám vân tay'
    ],
    specs: {
      'Driver': '11mm Dynamic Bio-Diaphragm',
      'Kết nối': 'Bluetooth 5.3, hỗ trợ LDAC/AAC',
      'Pin': 'Lên đến 36 giờ tổng cộng',
      'Kháng nước': 'IPX5',
      'Bảo hành': '12 tháng đổi mới'
    },
    officialUrl: 'https://soundmax.example.com'
  },
  {
    id: 'prod-3',
    name: 'LiteBook 14',
    slug: 'litebook-14',
    type: 'vat-ly',
    categorySlug: 'dien-tu',
    subCategorySlug: 'laptop',
    brand: 'LiteBook',
    summary: 'Laptop văn phòng mỏng nhẹ 1.2kg, màn hình 2.8K OLED, thời lượng pin 14 tiếng.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80',
    overallScore: 9.0,
    priceRef: '14.990.000đ',
    currency: 'VND',
    status: 'Published',
    updatedAt: '08/09/2026',
    scores: [
      { criterion: 'Hiệu năng vi xử lý', value: 8.9 },
      { criterion: 'Màn hình OLED 2.8K', value: 9.5 },
      { criterion: 'Thời lượng pin', value: 9.1 },
      { criterion: 'Chất lượng hoàn thiện', value: 9.0 },
      { criterion: 'Bàn phím & Touchpad', value: 8.8 }
    ],
    pros: [
      'Trọng lượng siêu nhẹ 1.2kg, vỏ nhôm nguyên khối',
      'Màn hình 2.8K OLED 120Hz màu sắc tuyệt đẹp',
      'Pin dùng thực tế 10-12 tiếng làm việc văn phòng',
      'Bàn phím gõ êm ái, hành trình phím 1.4mm'
    ],
    cons: [
      'Không nâng cấp được RAM (hàn chết trên main)',
      'Quạt tản nhiệt có tiếng gió khi render nặng'
    ],
    specs: {
      'CPU': 'Intel Core Ultra 5 / AMD Ryzen 7',
      'RAM': '16GB LPDDR5X',
      'Ổ cứng': '512GB PCIe 4.0 SSD',
      'Màn hình': '14 inch 2.8K OLED 120Hz 100% DCI-P3',
      'Trọng lượng': '1.24 kg'
    },
    officialUrl: 'https://litebook.example.com'
  },
  {
    id: 'prod-4',
    name: 'FitTrack S',
    slug: 'fittrack-s',
    type: 'vat-ly',
    categorySlug: 'dien-tu',
    subCategorySlug: 'smartwatch',
    brand: 'FitTrack',
    summary: 'Đồng hồ thông minh theo dõi sức khỏe SpO2, đo nhịp tim liên tục và GPS độc lập.',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80',
    overallScore: 8.8,
    priceRef: '3.290.000đ',
    currency: 'VND',
    status: 'Published',
    updatedAt: '05/09/2026',
    scores: [
      { criterion: 'Độ chính xác cảm biến', value: 8.9 },
      { criterion: 'Thời lượng pin', value: 9.2 },
      { criterion: 'Màn hình AMOLED', value: 8.8 },
      { criterion: 'Giao diện & Ứng dụng', value: 8.6 }
    ],
    pros: [
      'Thời lượng pin lên đến 14 ngày',
      'Cảm biến quang học đo SpO2 và giấc ngủ chuẩn xác',
      'Chống nước 5ATM đi bơi thoải mái'
    ],
    cons: [
      'Kho ứng dụng bên thứ 3 còn hạn chế'
    ],
    specs: {
      'Màn hình': '1.43 inch AMOLED Always-On',
      'Kháng nước': '5 ATM (50 mét)',
      'Pin': 'Lên đến 14 ngày',
      'Cảm biến': 'Nhịp tim, SpO2, Gia tốc kế, GPS'
    },
    officialUrl: 'https://fittrack.example.com'
  },
  {
    id: 'prod-5',
    name: 'CleanBot X1',
    slug: 'cleanbot-x1',
    type: 'vat-ly',
    categorySlug: 'gia-dung',
    subCategorySlug: 'robot-hut-bui',
    brand: 'CleanBot',
    summary: 'Robot hút bụi lau nhà thông minh với hệ thống định vị LiDAR và trạm tự động gom rác.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=80',
    overallScore: 8.6,
    priceRef: '5.990.000đ',
    currency: 'VND',
    status: 'Published',
    updatedAt: '04/09/2026',
    scores: [
      { criterion: 'Lực hút & Độ sạch', value: 8.8 },
      { criterion: 'Khả năng định vị tránh vật cản', value: 8.6 },
      { criterion: 'Độ êm ái', value: 8.4 },
      { criterion: 'Ứng dụng điều khiển tiếng Việt', value: 8.7 }
    ],
    pros: [
      'Lực hút mạnh 4000Pa hút sạch bụi mịn và lông thú',
      'Bản đồ laser quét nhanh 3 tầng lầu',
      'Tự động quay về dock sạc và hút rác'
    ],
    cons: [
      'Bình chứa nước lau nhà cần châm thủ công sau 2-3 ngày'
    ],
    specs: {
      'Lực hút': '4000 Pa',
      'Pin': '5200 mAh (hoạt động 150 phút)',
      'Điều hướng': 'LiDAR LDS 4.0 3D',
      'Bảo hành': '18 tháng chính hãng'
    },
    officialUrl: 'https://cleanbot.example.com'
  },
  {
    id: 'prod-6',
    name: 'HomeChef Dual',
    slug: 'homechef-dual',
    type: 'vat-ly',
    categorySlug: 'gia-dung',
    subCategorySlug: 'noi-chien',
    brand: 'HomeChef',
    summary: 'Nồi chiên không dầu 2 ngăn độc lập công suất 2200W, cho phép nấu 2 món cùng lúc với nhiệt độ khác nhau.',
    image: 'https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=600&auto=format&fit=crop&q=80',
    overallScore: 9.1,
    priceRef: '2.890.000đ',
    currency: 'VND',
    status: 'Published',
    updatedAt: '02/09/2026',
    scores: [
      { criterion: 'Độ linh hoạt 2 ngăn', value: 9.5 },
      { criterion: 'Hiệu suất làm nóng', value: 9.2 },
      { criterion: 'Dễ sử dụng', value: 8.8 },
      { criterion: 'Chất liệu & Độ bền', value: 9.0 }
    ],
    pros: [
      '2 ngăn nướng riêng biệt có thể đồng bộ thời gian chín (Sync Finish)',
      'Tổng dung tích 8L thoải mái cho tiệc gia đình',
      'Nhiệt độ tùy chỉnh từ 40°C đến 220°C'
    ],
    cons: [
      'Công suất lớn 2200W yêu cầu ổ điện chịu tải tốt'
    ],
    specs: {
      'Dung tích': '8.0 Lít (4L + 4L)',
      'Công suất': '2200W',
      'Tính năng độc quyền': 'Sync Cook & Match Cook',
      'Bảo hành': '24 tháng'
    },
    officialUrl: 'https://homechef.example.com'
  },

  // 6 Sản phẩm số
  {
    id: 'prod-7',
    name: 'ChatGPT Plus',
    slug: 'chatgpt-plus',
    type: 'so',
    categorySlug: 'cong-cu-ai',
    subCategorySlug: 'tro-ly-ao',
    brand: 'OpenAI',
    summary: 'Trợ lý AI hàng đầu thế giới với mô hình GPT-4o, phân tích dữ liệu, tạo ảnh DALL-E và duyệt web.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&auto=format&fit=crop&q=80',
    overallScore: 9.6,
    priceRef: '490.000đ/tháng ($20)',
    currency: 'VND',
    status: 'Published',
    updatedAt: '14/09/2026',
    scores: [
      { criterion: 'Khả năng suy luận & Logic', value: 9.8 },
      { criterion: 'Tốc độ phản hồi', value: 9.5 },
      { criterion: 'Đa phương thức (Hình ảnh/Âm thanh)', value: 9.7 },
      { criterion: 'Hệ sinh thái Custom GPTs', value: 9.4 }
    ],
    pros: [
      'Mô hình GPT-4o xử lý văn bản, ảnh, tài liệu PDF siêu nhanh',
      'Khả năng viết code và phân tích dữ liệu Python chuyên sâu',
      'Hỗ trợ tạo Custom GPT riêng biệt không cần code'
    ],
    cons: [
      'Đôi khi vẫn gặp hiện tượng ảo tưởng (hallucination) ở các chủ đề quá ngách'
    ],
    specs: {
      'Nền tảng': 'Web, iOS, Android, macOS, Windows',
      'Mô hình': 'GPT-4o, GPT-4, DALL-E 3',
      'Gói giá': 'Free cơ bản / Plus $20/tháng',
      'Hỗ trợ API': 'Có (qua OpenAI Platform)'
    },
    officialUrl: 'https://chatgpt.com'
  },
  {
    id: 'prod-8',
    name: 'Notion AI',
    slug: 'notion-ai',
    type: 'so',
    categorySlug: 'phan-mem',
    subCategorySlug: 'quan-ly-du-an',
    brand: 'Notion Labs',
    summary: 'Không gian làm việc và ghi chú tất-cả-trong-một, tích hợp trí tuệ nhân tạo tóm tắt, viết báo cáo.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80',
    overallScore: 9.3,
    priceRef: '240.000đ/tháng ($10)',
    currency: 'VND',
    status: 'Published',
    updatedAt: '11/09/2026',
    scores: [
      { criterion: 'Khả năng tổ chức dữ liệu', value: 9.8 },
      { criterion: 'Tính năng trợ lý AI', value: 9.1 },
      { criterion: 'Cộng tác nhóm', value: 9.4 },
      { criterion: 'Giao diện & Trải nghiệm', value: 9.2 }
    ],
    pros: [
      'Hệ thống cơ sở dữ liệu (Databases) mạnh mẽ và linh hoạt',
      'AI tích hợp trực tiếp trong tài liệu giúp tóm tắt và dịch thuật nhanh',
      'Kho mẫu templates cộng đồng đồ sộ'
    ],
    cons: [
      'Mất một khoảng thời gian học cách sử dụng (Learning curve cao)'
    ],
    specs: {
      'Nền tảng': 'Web, Windows, Mac, iOS, Android',
      'Gói giá': 'Free / Plus $10 / Business $18',
      'Tích hợp': 'Slack, GitHub, Figma, Google Drive'
    },
    officialUrl: 'https://notion.so'
  },
  {
    id: 'prod-9',
    name: 'NordVPN Pro',
    slug: 'nordvpn-pro',
    type: 'so',
    categorySlug: 'vpn',
    subCategorySlug: 'vpn-ca-nhan',
    brand: 'Nord Security',
    summary: 'Dịch vụ mạng riêng ảo VPN bảo mật hàng đầu với hơn 6.000 máy chủ tại 111 quốc gia.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80',
    overallScore: 9.4,
    priceRef: '89.000đ/tháng',
    currency: 'VND',
    status: 'Published',
    updatedAt: '09/09/2026',
    scores: [
      { criterion: 'Tốc độ kết nối NordLynx', value: 9.6 },
      { criterion: 'Chính sách bảo mật No-Logs', value: 9.8 },
      { criterion: 'Khả năng vượt tường lửa & Xem phim', value: 9.3 },
      { criterion: 'Dễ sử dụng trên mọi thiết bị', value: 9.2 }
    ],
    pros: [
      'Giao thức NordLynx độc quyền cho tốc độ kết nối siêu nhanh',
      'Chính sách không lưu nhật ký (No-Logs) đã qua kiểm toán độc lập',
      'Bảo vệ 10 thiết bị cùng lúc với 1 tài khoản'
    ],
    cons: [
      'Giá mua 1 tháng lẻ khá cao nếu không đăng ký gói dài hạn'
    ],
    specs: {
      'Máy chủ': '6000+ servers tại 111 quốc gia',
      'Nền tảng': 'Windows, Mac, iOS, Android, Linux, TV',
      'Mã hóa': 'AES-256-GCM / ChaCha20'
    },
    officialUrl: 'https://nordvpn.com'
  },
  {
    id: 'prod-10',
    name: 'Hostinger Cloud',
    slug: 'hostinger-cloud',
    type: 'so',
    categorySlug: 'hosting',
    subCategorySlug: 'cloud-hosting',
    brand: 'Hostinger',
    summary: 'Giải pháp Cloud Hosting tối ưu tốc độ LiteSpeed với bảng điều khiển hPanel trực quan.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80',
    overallScore: 9.0,
    priceRef: '199.000đ/tháng',
    currency: 'VND',
    status: 'Published',
    updatedAt: '07/09/2026',
    scores: [
      { criterion: 'Tốc độ máy chủ & Uptime', value: 9.2 },
      { criterion: 'Bảng điều khiển hPanel', value: 9.4 },
      { criterion: 'Hỗ trợ khách hàng 24/7', value: 8.8 },
      { criterion: 'Bảo mật & Sao lưu tự động', value: 9.0 }
    ],
    pros: [
      'Công nghệ LiteSpeed Web Server tải trang cực nhanh',
      'Tặng miễn phí tên miền và chứng chỉ SSL trọn đời',
      'Sao lưu hàng ngày và khôi phục trong 1 click'
    ],
    cons: [
      'Không hỗ trợ cPanel truyền thống (dùng hPanel độc quyền)'
    ],
    specs: {
      'RAM': '3GB Dedicated',
      'CPU': '2 Cores',
      'Ổ cứng': '200GB NVMe Storage',
      'Băng thông': 'Không giới hạn'
    },
    officialUrl: 'https://hostinger.com'
  },
  {
    id: 'prod-11',
    name: 'Canva Pro',
    slug: 'canva-pro',
    type: 'so',
    categorySlug: 'phan-mem',
    subCategorySlug: 'thiet-ke',
    brand: 'Canva',
    summary: 'Phần mềm thiết kế đồ họa trực tuyến dành cho người không chuyên với kho 100+ triệu tài nguyên.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80',
    overallScore: 9.2,
    priceRef: '149.000đ/tháng',
    currency: 'VND',
    status: 'Published',
    updatedAt: '03/09/2026',
    scores: [
      { criterion: 'Độ dễ sử dụng kéo thả', value: 9.8 },
      { criterion: 'Kho tài nguyên mẫu & ảnh', value: 9.5 },
      { criterion: 'Tính năng AI Magic Studio', value: 8.9 },
      { criterion: 'Xuất file chất lượng cao', value: 9.0 }
    ],
    pros: [
      'Xóa nền ảnh và video tự động chỉ với 1 click',
      'Hàng triệu font chữ, icon và ảnh stock bản quyền',
      'Bộ công cụ nhận diện thương hiệu Brand Kit'
    ],
    cons: [
      'Chưa thể thay thế hoàn toàn Photoshop cho việc chỉnh sửa vector phức tạp'
    ],
    specs: {
      'Tài nguyên': '100+ triệu ảnh, video, đồ họa',
      'Lưu trữ': '1TB Cloud Storage',
      'Tính năng nổi bật': 'Magic Switch, Background Remover, Magic Eraser'
    },
    officialUrl: 'https://canva.com'
  },
  {
    id: 'prod-12',
    name: 'Midjourney v6',
    slug: 'midjourney-v6',
    type: 'so',
    categorySlug: 'cong-cu-ai',
    subCategorySlug: 'tao-anh-ai',
    brand: 'Midjourney Inc',
    summary: 'Công cụ tạo ảnh nghệ thuật từ văn bản bằng trí tuệ nhân tạo có chất lượng chân thực đỉnh cao nhất.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    overallScore: 9.1,
    priceRef: '240.000đ/tháng ($10)',
    currency: 'VND',
    status: 'Published',
    updatedAt: '01/09/2026',
    scores: [
      { criterion: 'Chất lượng chi tiết & Độ chân thực', value: 9.9 },
      { criterion: 'Khả năng hiểu prompt phức tạp', value: 9.2 },
      { criterion: 'Độ tiện dụng giao diện', value: 8.2 },
      { criterion: 'Tốc độ render ảnh', value: 9.0 }
    ],
    pros: [
      'Chi tiết ánh sáng, da người, vật liệu sống động như chụp ảnh thật',
      'Hiểu sâu các thuật ngữ nhiếp ảnh và phong cách nghệ thuật',
      'Hỗ trợ tính năng inpainting và outpainting mở rộng khung hình'
    ],
    cons: [
      'Vẫn phụ thuộc chủ yếu vào giao diện Discord'
    ],
    specs: {
      'Nền tảng': 'Discord Bot & Web App',
      'Độ phân giải': 'Lên đến 2048x2048 (Upscaled)',
      'Gói giá': 'Basic $10 / Standard $30 / Pro $60'
    },
    officialUrl: 'https://midjourney.com'
  },
  {
    id: 'prod-13',
    name: 'RoboVac Ultra S2',
    slug: 'robovac-ultra-s2',
    type: 'vat-ly',
    categorySlug: 'gia-dung',
    subCategorySlug: 'robot-hut-bui',
    brand: 'RoboVac',
    summary: 'Robot hút bụi lau nhà xoay 360 độ thế hệ mới, lực hút cực đại 6000Pa kèm trạm giặt giẻ nước nóng tự động.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80',
    overallScore: 9.4,
    priceRef: '12.490.000đ',
    currency: 'VND',
    status: 'Published',
    updatedAt: '12/09/2026',
    scores: [
      { criterion: 'Lực hút & Độ sạch', value: 9.6 },
      { criterion: 'Trạm giặt sấy giẻ tự động', value: 9.5 },
      { criterion: 'Bản đồ & Tránh vật cản AI', value: 9.4 },
      { criterion: 'Thời lượng Pin', value: 9.2 },
      { criterion: 'Giá trị / Hiệu năng', value: 9.1 }
    ],
    pros: [
      'Lực hút khủng 6000Pa hút sạch rãnh gạch và bụi mịn',
      'Trạm sạc tự động hút rác, giặt giẻ và sấy khô khí nóng 45°C',
      'Hệ thống tránh vật cản 3D AI phát hiện dây điện, đồ chơi',
      'Lau xoay kép ép sát sàn mô phỏng lực lau tay'
    ],
    cons: [
      'Trạm sạc đa năng có kích thước tương đối lớn',
      'Giá thành thuộc phân khúc cao cấp'
    ],
    specs: {
      'Lực hút': '6000 Pa',
      'Pin': '5200 mAh (hoạt động 180 phút)',
      'Công nghệ lau': 'Xoay kép 180 vòng/phút',
      'Dung tích túi rác': '2.5 Lít (dùng 60 ngày)',
      'Bảo hành': '24 tháng chính hãng'
    },
    officialUrl: 'https://robovac.example.com'
  },
  {
    id: 'prod-14',
    name: 'DreameBot D9 Max',
    slug: 'dreamebot-d9-max',
    type: 'vat-ly',
    categorySlug: 'gia-dung',
    subCategorySlug: 'robot-hut-bui',
    brand: 'Dreame',
    summary: 'Robot hút bụi lau nhà thông minh tầm trung, định vị laser LDS 3.0, vượt gờ 20mm và hỗ trợ tiếng Việt.',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&auto=format&fit=crop&q=80',
    overallScore: 8.9,
    priceRef: '6.490.000đ',
    currency: 'VND',
    status: 'Published',
    updatedAt: '10/09/2026',
    scores: [
      { criterion: 'Lực hút & Độ sạch', value: 9.0 },
      { criterion: 'Định vị bản đồ Laser', value: 9.1 },
      { criterion: 'Độ êm & Tiếng ồn', value: 8.7 },
      { criterion: 'Khả năng vượt gờ cản', value: 9.2 },
      { criterion: 'Tỉ lệ giá tiền / Hiệu năng', value: 9.4 }
    ],
    pros: [
      'Giá thành cực tốt trong phân khúc điều hướng Laser LDS',
      'Khay chứa bụi dung tích lớn 570ml ít phải đổ rác',
      'Khả năng leo thảm và vượt gờ cửa lên đến 20mm',
      'Hỗ trợ thông báo giọng nói tiếng Việt dễ hiểu'
    ],
    cons: [
      'Không trang bị trạm gom rác tự động',
      'Khả năng lau sàn ở mức cơ bản (lau kéo thông thường)'
    ],
    specs: {
      'Lực hút': '4000 Pa',
      'Hộp chứa bụi': '570 ml',
      'Bình chứa nước': '270 ml',
      'Pin': '5200 mAh',
      'Bảo hành': '12 tháng chính hãng'
    },
    officialUrl: 'https://dreame.example.com'
  },
  {
    id: 'prod-15',
    name: 'AirPure Pro H13',
    slug: 'airpure-pro-h13',
    type: 'vat-ly',
    categorySlug: 'gia-dung',
    subCategorySlug: 'may-loc-khong-khi',
    brand: 'AirPure',
    summary: 'Máy lọc không khí màng lọc True HEPA H13 kháng khuẩn, khử mùi than hoạt tính và cảm biến bụi mịn PM2.5 nhạy bén.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&auto=format&fit=crop&q=80',
    overallScore: 9.2,
    priceRef: '3.690.000đ',
    currency: 'VND',
    status: 'Published',
    updatedAt: '09/09/2026',
    scores: [
      { criterion: 'Tốc độ lọc không khí CADR', value: 9.4 },
      { criterion: 'Khử mùi & Lọc bụi PM2.5', value: 9.3 },
      { criterion: 'Độ ồn ban đêm (Chế độ ngủ)', value: 9.5 },
      { criterion: 'Tiết kiệm điện năng', value: 9.0 }
    ],
    pros: [
      'Màng lọc 3 lớp lọc sạch 99.97% hạt bụi kích thước siêu nhỏ 0.3 micromet',
      'Vận hành siêu êm chỉ 24dB ở chế độ ban đêm',
      'Đèn LED hiển thị chất lượng không khí 4 màu trực quan'
    ],
    cons: [
      'Màng lọc thay thế định kỳ sau 6-9 tháng (chi phí ~500k)'
    ],
    specs: {
      'Diện tích sử dụng': '35 - 50 m²',
      'Chỉ số CADR': '380 m³/h',
      'Màng lọc': 'True HEPA H13 + Than hoạt tính',
      'Độ ồn': '24 - 58 dB',
      'Bảo hành': '24 tháng'
    },
    officialUrl: 'https://airpure.example.com'
  },
  {
    id: 'prod-macbook-air-m4',
    name: 'MacBook Air M4',
    slug: 'macbook-air-m4',
    type: 'vat-ly',
    categorySlug: 'dien-tu',
    subCategorySlug: 'laptop',
    brand: 'Apple',
    summary: 'Laptop mỏng nhẹ cao cấp trang bị vi xử lý Apple M4 thế hệ mới, màn hình Liquid Retina sắc nét và pin 18 giờ liên tục.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80',
    overallScore: 9.6,
    priceRef: '28.990.000đ',
    currency: 'VND',
    status: 'Published',
    updatedAt: '13/09/2026',
    scores: [
      { criterion: 'Hiệu năng vi xử lý M4', value: 9.8 },
      { criterion: 'Thời lượng Pin', value: 9.9 },
      { criterion: 'Màn hình Liquid Retina', value: 9.4 },
      { criterion: 'Thiết kế nhôm nguyên khối', value: 9.7 },
      { criterion: 'Giá trị đầu tư dài hạn', value: 9.2 }
    ],
    pros: [
      'Chip Apple M4 cực mạnh, cân mượt mà dựng phim 4K và lập trình',
      'Thời lượng pin thực tế 16-18 tiếng không cần cắm sạc',
      'Hoàn toàn không có quạt tản nhiệt, vận hành êm ái 100%',
      'Vỏ nhôm tái chế cao cấp mỏng chỉ 11.3mm, nặng 1.24kg'
    ],
    cons: [
      'Chỉ hỗ trợ tối đa 2 màn hình ngoài khi gập máy',
      'RAM và ổ cứng hàn chết không thể nâng cấp sau mua'
    ],
    specs: {
      'CPU': 'Apple M4 (10-Core CPU, 10-Core GPU)',
      'RAM': '16GB Unified Memory',
      'Ổ cứng': '512GB SSD tốc độ cao',
      'Màn hình': '13.6 inch Liquid Retina 500 nits True Tone',
      'Trọng lượng': '1.24 kg',
      'Bảo hành': '12 tháng chính hãng Apple'
    },
    officialUrl: 'https://apple.com'
  },
  {
    id: 'prod-dell-xps-13',
    name: 'Dell XPS 13 (9340)',
    slug: 'dell-xps-13',
    type: 'vat-ly',
    categorySlug: 'dien-tu',
    subCategorySlug: 'laptop',
    brand: 'Dell',
    summary: 'Laptop Windows siêu cao cấp với màn hình OLED InfinityEdge 3K viền vô cực, touchpad kính ẩn và chip Intel Core Ultra AI.',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80',
    overallScore: 9.2,
    priceRef: '32.490.000đ',
    currency: 'VND',
    status: 'Published',
    updatedAt: '12/09/2026',
    scores: [
      { criterion: 'Thiết kế viền vô cực OLED', value: 9.8 },
      { criterion: 'Hiệu năng Intel Core Ultra', value: 9.0 },
      { criterion: 'Bàn phím & Touchpad ẩn', value: 8.8 },
      { criterion: 'Thời lượng Pin', value: 8.9 },
      { criterion: 'Chất lượng gia công', value: 9.5 }
    ],
    pros: [
      'Màn hình cảm ứng OLED 3K hiển thị màu đen tuyệt đối',
      'Thiết kế tương lai với viền siêu mỏng và touchpad ẩn dưới kính Gorilla Glass',
      'Trọng lượng chỉ 1.19kg cực kỳ thuận tiện di chuyển',
      'Tương thích hoàn hảo với hệ sinh thái phần mềm Windows 11'
    ],
    cons: [
      'Thời lượng pin khoảng 10-11 tiếng, thấp hơn MacBook Air M4',
      'Dãy phím Function cảm ứng điện dung cần thời gian làm quen'
    ],
    specs: {
      'CPU': 'Intel Core Ultra 7 155H (16 nhân, 22 luồng, NPU AI)',
      'RAM': '16GB LPDDR5x 7467MHz',
      'Ổ cứng': '512GB PCIe Gen4 NVMe SSD',
      'Màn hình': '13.4 inch 3K+ (2880x1800) OLED Touch 60Hz 400 nits',
      'Trọng lượng': '1.19 kg',
      'Bảo hành': '24 tháng Dell ProSupport'
    },
    officialUrl: 'https://dell.com'
  },
  {
    id: 'prod-aircook-mini',
    name: 'AirCook Mini 3.5L',
    slug: 'aircook-mini-3-5l',
    type: 'vat-ly',
    categorySlug: 'gia-dung',
    subCategorySlug: 'noi-chien',
    brand: 'AirCook',
    summary: 'Nồi chiên không dầu mini 3.5L nhỏ gọn, công nghệ đối lưu nhanh, giải pháp kinh tế cho người độc thân hoặc gia đình 2 người.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80',
    overallScore: 8.8,
    priceRef: '1.290.000đ',
    currency: 'VND',
    status: 'Published',
    updatedAt: '11/09/2026',
    scores: [
      { criterion: 'Tốc độ làm chín thức ăn', value: 9.0 },
      { criterion: 'Thiết kế nhỏ gọn tiết kiệm chỗ', value: 9.5 },
      { criterion: 'Độ dễ vệ sinh giỏ chiên', value: 9.2 },
      { criterion: 'Giá trị / Giá tiền', value: 9.6 }
    ],
    pros: [
      'Kích thước nhỏ gọn đặt vừa mọi gian bếp nhỏ hoặc phòng trọ',
      'Công suất 1400W làm nóng cực nhanh, không cần làm nóng trước',
      'Lòng nồi chống dính tháo rời vệ sinh trong 1 phút',
      'Giá thành cực mềm dưới 1.5 triệu đồng'
    ],
    cons: [
      'Dung tích 3.5L chỉ vừa nướng đùi gà hoặc 500g khoai tây, không nướng gà nguyên con',
      'Điều khiển núm vặn cơ bản, không có màn hình LED'
    ],
    specs: {
      'Dung tích': '3.5 Lít',
      'Công suất': '1400W',
      'Điều khiển': 'Núm vặn cơ học hẹn giờ 30 phút',
      'Trọng lượng': '3.2 kg',
      'Bảo hành': '12 tháng chính hãng'
    },
    officialUrl: 'https://aircook.example.com'
  },
  {
    id: 'prod-philips-hd9200',
    name: 'Philips Essential HD9200',
    slug: 'philips-essential-hd9200',
    type: 'vat-ly',
    categorySlug: 'gia-dung',
    subCategorySlug: 'noi-chien',
    brand: 'Philips',
    summary: 'Nồi chiên không dầu thương hiệu châu Âu với công nghệ Rapid Air hình sao độc quyền giúp món chiên giòn rụm bên ngoài và mềm mọng bên trong.',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80',
    overallScore: 9.0,
    priceRef: '1.890.000đ',
    currency: 'VND',
    status: 'Published',
    updatedAt: '09/09/2026',
    scores: [
      { criterion: 'Độ giòn đều công nghệ Rapid Air', value: 9.5 },
      { criterion: 'Độ bền linh kiện Philips', value: 9.4 },
      { criterion: 'Lớp chống dính QuickClean', value: 9.1 },
      { criterion: 'Độ tin cậy thương hiệu', value: 9.6 }
    ],
    pros: [
      'Đáy nồi thiết kế hình sao độc quyền lưu chuyển luồng khí nóng tối ưu',
      'Lớp chống dính siêu bền khó trầy xước, dùng an toàn cho máy rửa bát',
      'Độ hoàn thiện nhựa cao cấp chịu nhiệt, không có mùi nhựa khi đun nấu mới'
    ],
    cons: [
      'Dung tích 4.1L ở mức vừa phải cho gia đình 3-4 người'
    ],
    specs: {
      'Dung tích': '4.1 Lít',
      'Công suất': '1400W',
      'Công nghệ': 'Rapid Air hình sao độc quyền Philips',
      'Bảo hành': '24 tháng toàn cầu'
    },
    officialUrl: 'https://philips.vn'
  },
  {
    id: 'prod-sony-wf1000xm5',
    name: 'Sony WF-1000XM5',
    slug: 'sony-wf-1000xm5',
    type: 'vat-ly',
    categorySlug: 'dien-tu',
    subCategorySlug: 'tai-nghe',
    brand: 'Sony',
    summary: 'Tai nghe chống ồn chủ động đỉnh cao với bộ vi xử lý V2 + QN2e kép, driver Dynamic X và hỗ trợ codec âm thanh Hi-Res LDAC.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80',
    overallScore: 9.6,
    priceRef: '5.490.000đ',
    currency: 'VND',
    status: 'Published',
    updatedAt: '12/09/2026',
    scores: [
      { criterion: 'Khử ồn chủ động ANC kép', value: 9.9 },
      { criterion: 'Chất âm Hi-Res LDAC', value: 9.7 },
      { criterion: 'Thời lượng pin & Sạc nhanh', value: 9.3 },
      { criterion: 'Độ êm ái mút tai bọt biển', value: 9.4 }
    ],
    pros: [
      'Khả năng chống ồn chủ động top 1 thế giới hiện nay',
      'Chất âm chi tiết, dải bass uy lực mà không lấn át dải trung',
      'Đệm tai Polyurethane cách âm thụ động tuyệt vời'
    ],
    cons: [
      'Mức giá thuộc phân khúc cao cấp'
    ],
    specs: {
      'Driver': 'Dynamic Driver X 8.4mm',
      'Vi xử lý': 'Sony V2 + QN2e',
      'Pin': '8h tai lẻ + 16h hộp sạc (bật ANC)',
      'Chống nước': 'IPX4',
      'Bảo hành': '12 tháng chính hãng Sony'
    },
    officialUrl: 'https://sony.com.vn'
  },
  {
    id: 'prod-surfshark-one',
    name: 'Surfshark One',
    slug: 'surfshark-one',
    type: 'so',
    categorySlug: 'vpn',
    subCategorySlug: 'vpn-ca-nhan',
    brand: 'Surfshark',
    summary: 'Giải pháp an ninh mạng toàn diện kết hợp VPN không giới hạn thiết bị kết nối, phần mềm Antivirus và bảo vệ danh tính số Alert.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80',
    overallScore: 9.3,
    priceRef: '69.000đ/tháng',
    currency: 'VND',
    status: 'Published',
    updatedAt: '11/09/2026',
    scores: [
      { criterion: 'Không giới hạn thiết bị', value: 9.9 },
      { criterion: 'Tốc độ máy chủ 10Gbps WireGuard', value: 9.2 },
      { criterion: 'Bảo vệ danh tính & Antivirus', value: 9.1 },
      { criterion: 'Giá cước & Khuyến mãi', value: 9.5 }
    ],
    pros: [
      'Dùng đồng thời trên bao nhiêu điện thoại, laptop, TV tùy ý',
      'Tính năng CleanWeb chặn sạch quảng cáo độc hại và mã theo dõi',
      'Bảo hiểm dữ liệu cá nhân với tính năng cảnh báo rò rỉ email'
    ],
    cons: [
      'Để có giá tốt nhất cần đăng ký gói 2 năm'
    ],
    specs: {
      'Thiết bị đồng thời': 'Không giới hạn',
      'Máy chủ': '3200+ máy chủ tại 100 quốc gia',
      'Giao thức': 'WireGuard, OpenVPN, IKEv2',
      'Bảo hành': 'Hoàn tiền 30 ngày'
    },
    officialUrl: 'https://surfshark.com'
  }
];

export const rankings = [
  // 2 Rankings Vật lý
  {
    id: 'rank-1',
    title: 'Top 10 Nồi Chiên Không Dầu Tốt Nhất 2026',
    slug: 'noi-chien-khong-dau',
    group: 'vat-ly',
    categoryName: 'Gia dụng & Nhà bếp',
    authorId: 'author-2',
    updatedAt: '14/09/2026',
    intro: 'Chúng tôi đã thử nghiệm thực tế 18 mẫu nồi chiên không dầu phổ biến nhất trên thị trường để tìm ra những sản phẩm có khả năng làm giòn thức ăn tốt nhất, dễ rửa dọn và độ bền cao.',
    methodology: 'Đánh giá dựa trên 4 tiêu chí cốt lõi: Khả năng làm chín đều & giảm dầu mỡ (35%), Thiết kế & Lớp chống dính (25%), Dễ sử dụng & Bảng điều khiển (20%), Giá trị trên giá tiền (20%).',
    quickPicks: {
      bestOverall: { name: 'Aircook Pro 6L', reason: 'Tốt nhất tổng thể, nấu chín nhanh, tiết kiệm điện' },
      bestValue: { name: 'HomeChef Dual', reason: 'Lựa chọn linh hoạt nhất với 2 ngăn độc lập' },
      budgetPick: { name: 'AirCook Mini 3.5L', reason: 'Giá rẻ nhất cho người độc thân hoặc gia đình 2 người' }
    },
    items: [
      { rank: 1, productId: 'prod-1', label: 'TỐT NHẤT TỔNG THỂ', rationale: 'Dung tích 6L chuẩn gia đình, công nghệ Rapid Air giòn rụm bên ngoài và mềm mọng bên trong.' },
      { rank: 2, productId: 'prod-6', label: 'LINH HOẠT NHẤT', rationale: '2 ngăn nấu 2 món cùng lúc không bị lẫn mùi, tính năng Sync Finish cực kỳ thông minh.' },
      { rank: 3, productId: 'prod-aircook-mini', label: 'GIÁ TỐT CHO 1-2 NGƯỜI', rationale: 'Kích thước 3.5L nhỏ gọn đặt vừa mọi gian bếp nhỏ, làm nóng nhanh và giá cực kỳ dễ tiếp cận.' },
      { rank: 4, productId: 'prod-philips-hd9200', label: 'BỀN BỈ & ĐỘ HOÀN THIỆN CAO', rationale: 'Đáy nồi hình sao Rapid Air độc quyền của Philips giúp luồng khí tuần hoàn tối đa, lớp chống dính siêu bền an toàn sức khỏe.' }
    ]
  },
  {
    id: 'rank-2',
    title: 'Top 10 Tai Nghe Không Dây Chống Ồn Tốt Nhất 2026',
    slug: 'tai-nghe-khong-day',
    group: 'vat-ly',
    categoryName: 'Thiết bị Điện tử',
    authorId: 'author-1',
    updatedAt: '12/09/2026',
    intro: 'Trải nghiệm âm nhạc tuyệt đỉnh và khả năng chống ồn tách biệt với thế giới bên ngoài cùng danh sách các tai nghe True Wireless được chấm điểm cao nhất.',
    methodology: 'Thử nghiệm chống ồn trong môi trường tiếng ồn quán cafe, văn phòng và trên máy bay; đo đạc chất lượng mic thoại khi có gió mạnh.',
    quickPicks: {
      bestOverall: { name: 'Sony WF-1000XM5', reason: 'Chống ồn đỉnh cao top 1 thế giới, chất âm Hi-Res LDAC' },
      bestValue: { name: 'SoundMax Air', reason: 'Giá chỉ dưới 2 triệu đồng nhưng chống ồn 42dB và pin 36 tiếng' }
    },
    items: [
      { rank: 1, productId: 'prod-sony-wf1000xm5', label: 'CHỐNG ỒN ĐỈNH CAO', rationale: 'Bộ xử lý V2 + QN2e kép khử ồn sâu nhất phân khúc, âm thanh Hi-Res LDAC tuyệt đỉnh cho audiophile.' },
      { rank: 2, productId: 'prod-2', label: 'P/P VƯỢT TRỘI', rationale: 'Khử ồn sâu 42dB, đeo cả ngày êm ái không đau tai, pin cực trâu 36 tiếng.' }
    ]
  },

  // 2 Rankings Số
  {
    id: 'rank-3',
    title: 'Top 10 Công Cụ AI Tăng Hiệu Suất Làm Việc 2026',
    slug: 'cong-cu-ai-tot-nhat',
    group: 'so',
    categoryName: 'Công cụ AI',
    authorId: 'author-3',
    updatedAt: '13/09/2026',
    intro: 'Đột phá năng suất làm việc của bạn với các công cụ AI thông minh nhất hiện nay, từ trợ lý ảo, viết báo cáo đến tạo ảnh và phân tích dữ liệu tự động.',
    methodology: 'Thử nghiệm qua 50 tác vụ văn phòng thực tế: viết email, tóm tắt báo cáo 100 trang, phân tích dữ liệu Excel và tạo hình ảnh minh họa.',
    quickPicks: {
      bestOverall: { name: 'ChatGPT Plus', reason: 'Toàn diện nhất, suy luận logic mạnh mẽ nhất với GPT-4o' },
      bestValue: { name: 'Notion AI', reason: 'Tích hợp mượt mà nhất cho quản lý dự án và ghi chú' },
      bestCreative: { name: 'Midjourney v6', reason: 'Chất lượng ảnh nghệ thuật chân thực vượt trội' }
    },
    items: [
      { rank: 1, productId: 'prod-7', label: 'TRỢ LÝ TỐT NHẤT', rationale: 'Tư duy logic và giải quyết vấn đề phức tạp vượt trội mọi đối thủ trên thị trường.' },
      { rank: 2, productId: 'prod-8', label: 'QUẢN LÝ DỰ ÁN AI', rationale: 'Tự động biến ghi chú hỗn loạn thành bảng công việc có cấu trúc chuyên nghiệp.' },
      { rank: 3, productId: 'prod-12', label: 'TẠO ẢNH ĐỈNH CAO', rationale: 'Tạo ảnh đồ họa và phối cảnh siêu thực cho designer và marketer.' }
    ]
  },
  {
    id: 'rank-4',
    title: 'Top 10 Dịch Vụ VPN An Toàn & Tốc Độ Cao 2026',
    slug: 'vpn-tot-nhat',
    group: 'so',
    categoryName: 'VPN & An ninh mạng',
    authorId: 'author-3',
    updatedAt: '10/09/2026',
    intro: 'Bảo vệ quyền riêng tư số và mã hóa toàn bộ dữ liệu truy cập internet của bạn với những dịch vụ VPN uy tín nhất thế giới.',
    methodology: 'Kiểm tra rò rỉ DNS/IP, đo lường tốc độ suy giảm khi kết nối máy chủ quốc tế tại Mỹ, Nhật Bản, Singapore và Châu Âu.',
    quickPicks: {
      bestOverall: { name: 'NordVPN Pro', reason: 'Tốc độ nhanh nhất, chính sách No-Logs bảo mật cao' },
      bestValue: { name: 'Surfshark One', reason: 'Không giới hạn thiết bị, giá rẻ và tích hợp diệt virus' }
    },
    items: [
      { rank: 1, productId: 'prod-9', label: 'VPN TOÀN DIỆN NHẤT', rationale: 'Tốc độ mạng gần như không đổi khi bật VPN, mở khóa mọi nội dung streaming.' },
      { rank: 2, productId: 'prod-surfshark-one', label: 'TIẾT KIỆM CHO GIA ĐÌNH', rationale: 'Cho phép kết nối vô số thiết bị cùng lúc với 1 tài khoản, tích hợp CleanWeb chặn quảng cáo rác.' }
    ]
  },
  {
    id: 'rank-5',
    title: 'Top 10 Robot Hút Bụi Lau Nhà Thông Minh Tốt Nhất 2026',
    slug: 'robot-hut-bui-thong-minh',
    group: 'vat-ly',
    categoryName: 'Gia dụng & Nhà bếp',
    authorId: 'author-2',
    updatedAt: '14/09/2026',
    intro: 'Thử nghiệm thực tế 15 robot hút bụi lau nhà hàng đầu: kiểm tra khả năng hút tóc, bụi mịn, vượt thảm và độ thông minh của trạm sạc tự động gom rác.',
    methodology: 'Đánh giá dựa trên: Lực hút và khả năng làm sạch tóc/lông thú (35%), Tránh vật cản và lập bản đồ (30%), Độ tiện lợi của Dock sạc (20%), Độ ồn và độ bền (15%).',
    quickPicks: {
      bestOverall: { name: 'RoboVac Ultra S2', reason: 'Lực hút 6000Pa mạnh nhất, trạm giặt giẻ nước nóng toàn diện' },
      bestValue: { name: 'DreameBot D9 Max', reason: 'Hiệu năng laser đỉnh cao với giá thành dưới 7 triệu' },
      budgetPick: { name: 'CleanBot X1', reason: 'Đầy đủ trạm gom rác tự động trong tầm giá mềm' }
    },
    items: [
      { rank: 1, productId: 'prod-13', label: 'TỐT NHẤT TỔNG THỂ', rationale: 'Công nghệ lau xoay kép 360 độ và trạm giặt giẻ sấy khí nóng hoàn hảo cho gia đình bận rộn.' },
      { rank: 2, productId: 'prod-14', label: 'P/P XUẤT SẮC', rationale: 'Định vị LiDAR chính xác, vượt chướng ngại vật cực êm và pin trâu 180 phút.' },
      { rank: 3, productId: 'prod-5', label: 'TIỆN DỤNG NHẤT', rationale: 'Trạm gom rác 2.5L dùng cả tháng không cần đổ rác.' }
    ]
  },
  {
    id: 'rank-6',
    title: 'Top 10 Dịch Vụ Cloud Hosting Tốc Độ Cao 2026',
    slug: 'cloud-hosting-toc-do-cao',
    group: 'so',
    categoryName: 'Hosting & Tên miền',
    authorId: 'author-3',
    updatedAt: '12/09/2026',
    intro: 'So sánh tốc độ tải trang Time to First Byte (TTFB), chỉ số Uptime và chất lượng hỗ trợ kỹ thuật của các nhà cung cấp Hosting đám mây hàng đầu.',
    methodology: 'Đo lường hiệu năng thực tế thông qua 10,000 lượt truy cập ảo đồng thời, kiểm tra tốc độ phản hồi máy chủ từ Việt Nam, Singapore và Mỹ.',
    quickPicks: {
      bestOverall: { name: 'Hostinger Cloud', reason: 'Tối ưu LiteSpeed, bảng điều khiển hPanel trực quan và giá mềm' }
    },
    items: [
      { rank: 1, productId: 'prod-10', label: 'TỐC ĐỘ HÀNG ĐẦU', rationale: 'Công nghệ LiteSpeed Web Server tải trang dưới 0.8 giây, tích hợp CDN toàn cầu.' }
    ]
  }
];

export const comparisons = [
  // 1 So sánh vật lý
  {
    id: 'comp-1',
    slug: 'aircook-pro-vs-homechef-dual',
    title: 'AirCook Pro 6L vs HomeChef Dual: Nên Chọn Nồi Chiên 1 Ngăn Hay 2 Ngăn?',
    type: 'vat-ly',
    productAId: 'prod-1',
    productBId: 'prod-6',
    winnerId: 'prod-1',
    summaryWinner: 'AirCook Pro 6L chiến thắng về độ giòn đều và độ dễ vệ sinh; HomeChef Dual phù hợp hơn nếu gia đình bạn thường xuyên nấu 2 món cùng lúc.',
    updatedAt: '10/09/2026',
    matrix: [
      { criterion: 'Dung tích tổng', productA: '6.0 Lít (1 ngăn lớn)', productB: '8.0 Lít (2 ngăn 4L)', winner: 'B' },
      { criterion: 'Nấu 2 món cùng lúc', productA: 'Cần nướng lần lượt', productB: 'Có (Nhiệt độ riêng biệt)', winner: 'B' },
      { criterion: 'Độ giòn đều của thức ăn', productA: 'Rất xuất sắc (Rapid Air 360)', productB: 'Tốt (ở từng ngăn)', winner: 'A' },
      { criterion: 'Độ dễ rửa dọn', productA: 'Dễ dàng (1 giỏ chiên)', productB: 'Phức tạp hơn (2 giỏ chiên)', winner: 'A' },
      { criterion: 'Mức tiêu thụ điện', productA: '1800W', productB: '2200W', winner: 'A' },
      { criterion: 'Giá bán tham khảo', productA: '2.490.000đ', productB: '2.890.000đ', winner: 'A' }
    ],
    verdict: {
      chooseAIf: 'Bạn nấu bữa ăn thông thường cho 3-5 người, muốn giỏ chiên to để nướng gà nguyên con và rửa dọn nhanh gọn.',
      chooseBIf: 'Gia đình bạn có khẩu vị đa dạng, muốn cùng lúc vừa nướng khoai vừa chiên thịt mà không phải chờ đợi.'
    }
  },

  // 1 So sánh số
  {
    id: 'comp-2',
    slug: 'chatgpt-plus-vs-notion-ai',
    title: 'ChatGPT Plus vs Notion AI: Nên Chọn Trợ Lý AI Hay Không Gian Làm Việc Thông Minh?',
    type: 'so',
    productAId: 'prod-7',
    productBId: 'prod-8',
    winnerId: 'prod-7',
    summaryWinner: 'ChatGPT Plus phù hợp hơn cho người cần một trợ lý AI đa năng để phân tích, viết và xử lý nhiều dạng tác vụ; Notion AI là lựa chọn mạnh hơn khi công việc của bạn đã tập trung trong không gian ghi chú, tài liệu và dự án của Notion.',
    updatedAt: '12/09/2026',
    matrix: [
      { criterion: 'Vai trò chính', productA: 'Trợ lý AI đa năng, hội thoại độc lập', productB: 'AI tích hợp trong workspace Notion', winner: 'Hòa' },
      { criterion: 'Phân tích & suy luận đa tác vụ', productA: 'Mạnh với văn bản, ý tưởng, phân tích và hội thoại', productB: 'Tối ưu cho nội dung đang có trong Notion', winner: 'A' },
      { criterion: 'Quản lý dự án & tri thức nhóm', productA: 'Cần kết hợp công cụ ngoài', productB: 'Tích hợp database, tài liệu và task', winner: 'B' },
      { criterion: 'Tạo nội dung từ ngữ cảnh tài liệu', productA: 'Dán hoặc tải ngữ cảnh thủ công', productB: 'Dùng trực tiếp trang và workspace Notion', winner: 'B' },
      { criterion: 'Tích hợp', productA: 'Web, desktop, mobile và GPTs', productB: 'Notion Web, desktop và mobile', winner: 'A' },
      { criterion: 'Giá tham khảo', productA: '490.000đ/tháng', productB: '240.000đ/tháng', winner: 'B' }
    ],
    verdict: {
      chooseAIf: 'Bạn cần một trợ lý AI linh hoạt để viết, phân tích, học tập, lập kế hoạch và giải quyết nhiều tác vụ khác nhau mỗi ngày.',
      chooseBIf: 'Bạn đã dùng Notion làm nơi lưu tài liệu và quản lý dự án, muốn AI đọc hiểu và xử lý ngay trong quy trình làm việc của nhóm.'
    }
  }
];

export const guides = [
  // 2 Guides Vật lý
  {
    id: 'guide-1',
    slug: 'cach-chon-tai-nghe',
    title: 'Cách Chọn Tai Nghe Phù Hợp Với Nhu Cầu Của Bạn',
    type: 'vat-ly',
    authorId: 'author-1',
    updatedAt: '08/09/2026',
    excerpt: 'Hướng dẫn chi tiết từ chuyên gia giúp bạn phân biệt tai nghe True Wireless, Over-Ear và chọn chiếc tai nghe có chất âm ưng ý nhất.',
    sections: [
      { title: '1. Xác định môi trường sử dụng chính', content: 'Nếu bạn thường xuyên di chuyển hoặc tập thể thao, tai nghe nhét tai True Wireless có chống nước IPX4 trở lên là lựa chọn hàng đầu. Nếu bạn làm việc tại bàn hoặc cần âm trường rộng, tai nghe chụp tai (Over-ear) sẽ đem lại độ êm ái cao hơn.' },
      { title: '2. Công nghệ chống ồn chủ động (ANC) có cần thiết không?', content: 'ANC thực sự cứu cánh nếu bạn làm việc trong văn phòng ồn ào hoặc thường xuyên đi xe bus, máy bay. Tuy nhiên nếu bạn chỉ dùng trong phòng ngủ yên tĩnh, bạn có thể tiết kiệm chi phí bằng việc chọn tai nghe không có ANC.' },
      { title: '3. Thời lượng pin và hộp sạc', content: 'Chuẩn pin tối thiểu cho tai nghe không dây hiện đại nên từ 6-8 tiếng trên củ tai và tối thiểu 24 tiếng kèm hộp sạc.' },
      { title: '4. Những sai lầm thường gặp khi mua tai nghe', content: 'Nhiều người lầm tưởng cứ nhiều âm trầm (bass) là tai nghe hay. Thực tế, một chiếc tai nghe tốt cần có sự cân bằng giữa âm trầm, giọng hát (mid) và nhạc cụ (treble) để nghe lâu không bị mỏi tai.' }
    ],
    suggestedRankings: ['tai-nghe-khong-day'],
    suggestedProducts: ['prod-2']
  },
  {
    id: 'guide-2',
    slug: 'cach-chon-noi-chien',
    title: 'Cẩm Nang Chọn Mua Nồi Chiên Không Dầu Phù Hợp Cho Gia Đình',
    type: 'vat-ly',
    authorId: 'author-2',
    updatedAt: '09/09/2026',
    excerpt: 'Tất tần tật kinh nghiệm chọn dung tích, công suất, lớp chống dính và những lưu ý an toàn sức khỏe khi dùng nồi chiên không dầu.',
    sections: [
      { title: '1. Chọn dung tích theo số lượng thành viên', content: 'Gia đình 1-2 người: chọn nồi 3.5L - 4.5L. Gia đình 3-5 người: chọn nồi từ 5.5L - 6.5L. Nếu muốn nướng gà vịt nguyên con trên 2kg: nên ưu tiên nồi từ 6L trở lên.' },
      { title: '2. Chất liệu lòng nồi và lớp chống dính', content: 'Nên ưu tiên lòng nồi tráng gốm Ceramic hoặc lớp chống dính Teflon cao cấp có chứng nhận an toàn không chứa PFOA/PTFE độc hại khi đun nấu ở nhiệt độ cao.' },
      { title: '3. Điều khiển cơ hay cảm ứng điện tử?', content: 'Nồi chiên cơ bền bỉ, dễ vặn cho người lớn tuổi. Nồi điện tử có màn hình hiển thị chính xác nhiệt độ và có sẵn các menu nướng tự động thông minh.' }
    ],
    suggestedRankings: ['noi-chien-khong-dau'],
    suggestedProducts: ['prod-1', 'prod-6']
  },

  // 2 Guides Số
  {
    id: 'guide-3',
    slug: 'cach-chon-cong-cu-ai',
    title: 'Hướng Dẫn Lựa Chọn Công Cụ AI Phục Vụ Công Việc Văn Phòng 2026',
    type: 'so',
    authorId: 'author-3',
    updatedAt: '07/09/2026',
    excerpt: 'Phân loại các nhóm công cụ AI hiện nay và gợi ý bộ công cụ (AI Stack) phù hợp nhất cho từng ngành nghề.',
    sections: [
      { title: '1. AI tổng quát vs AI chuyên biệt', content: 'ChatGPT hay Claude phù hợp làm trợ lý đa năng. Nhưng nếu cần viết bài chuẩn SEO, bạn nên dùng các công cụ chuyên dụng; nếu cần tạo ảnh quảng cáo, Midjourney là lựa chọn vượt trội.' },
      { title: '2. Xem xét chính sách bảo mật dữ liệu công ty', content: 'Tuyệt đối không nhập dữ liệu khách hàng, mã nguồn nội bộ lên các phiên bản AI miễn phí công khai nếu chưa kiểm tra thỏa thuận quyền riêng tư.' },
      { title: '3. Tối ưu chi phí bản quyền', content: 'Hầu hết các công cụ đều có gói miễn phí đủ dùng thử nghiệm. Hãy chỉ nâng cấp trả phí khi công cụ đó giúp bạn tiết kiệm ít nhất 2 giờ làm việc mỗi tuần.' }
    ],
    suggestedRankings: ['cong-cu-ai-tot-nhat'],
    suggestedProducts: ['prod-7', 'prod-8', 'prod-12']
  },
  {
    id: 'guide-4',
    slug: 'cach-chon-vpn',
    title: 'Cách Chọn Dịch Vụ VPN An Toàn: 5 Tiêu Chí Không Thể Bỏ Qua',
    type: 'so',
    authorId: 'author-3',
    updatedAt: '06/09/2026',
    excerpt: 'Những tiêu chuẩn vàng giúp bạn chọn đúng VPN uy tín để lướt web an toàn và không lo bị theo dõi dữ liệu.',
    sections: [
      { title: '1. Chính sách không lưu nhật ký (No-Logs Policy)', content: 'Một dịch vụ VPN thực sự an toàn phải cam kết không lưu lại địa chỉ IP thực, lịch sử duyệt web hay dữ liệu băng thông của bạn, và chính sách này phải được bên thứ ba kiểm toán.' },
      { title: '2. Tốc độ kết nối và mạng lưới máy chủ', content: 'VPN có máy chủ đặt gần vị trí của bạn (như Singapore, Nhật Bản, Hong Kong) sẽ đem lại độ trễ thấp và tốc độ tải trang mượt mà nhất.' }
    ],
    suggestedRankings: ['vpn-tot-nhat'],
    suggestedProducts: ['prod-9']
  },
  {
    id: 'guide-5',
    slug: 'kinh-nghiem-chon-robot-hut-bui',
    title: 'Kinh Nghiệm Chọn Mua Robot Hút Bụi Lau Nhà Thông Minh 2026',
    type: 'vat-ly',
    authorId: 'author-2',
    updatedAt: '13/09/2026',
    excerpt: 'Hướng dẫn chi tiết cách chọn robot hút bụi cho chung cư, nhà tầng, nhà nuôi thú cưng và cách chọn dock sạc tự động.',
    sections: [
      { title: '1. Chọn lực hút theo nhu cầu sàn nhà', content: 'Với sàn gạch và sàn gỗ thông thường, lực hút từ 3000Pa - 4000Pa là đủ sạch bụi mịn. Nếu nhà có trải thảm hoặc nuôi chó mèo rụng nhiều lông, nên ưu tiên các mẫu có lực hút từ 5000Pa - 6000Pa.' },
      { title: '2. Công nghệ điều hướng: Laser LDS vs Camera AI', content: 'Điều hướng Laser LDS giúp robot vẽ bản đồ chính xác cả trong bóng tối. Các dòng cao cấp kết hợp thêm Camera RGB và AI giúp nhận diện chính xác dây sạc, dép và phân thú cưng để chủ động né tránh.' },
      { title: '3. Có nên mua trạm tự động gom rác và giặt giẻ?', content: 'Nếu ngân sách cho phép, trạm sạc tự động là nâng cấp đáng giá nhất. Bạn sẽ không phải đổ bụi mỗi ngày và không lo giẻ lau bị ẩm mốc bốc mùi hôi nhờ tính năng sấy khí nóng.' }
    ],
    suggestedRankings: ['robot-hut-bui-thong-minh'],
    suggestedProducts: ['prod-13', 'prod-14', 'prod-5']
  }
];
