// Store demo dùng chung cho landing + admin (lưu localStorage, seed từ mockData).
// Pure JavaScript, không dùng JSX.

import { products as seedProducts, categories as seedCategories } from '../data/mockData';

const PRODUCTS_KEY = 'topchoice-products-v1';
const CATEGORIES_KEY = 'topchoice-categories-v1';
const ADMIN_KEY = 'topchoice-admin-auth';
export const DATA_EVENT = 'topchoice:data';

const clone = (v) => JSON.parse(JSON.stringify(v));

function read(key, seed) {
  if (typeof window === 'undefined') return clone(seed);
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) {
      window.localStorage.setItem(key, JSON.stringify(seed));
      return clone(seed);
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return clone(seed);
    return parsed;
  } catch {
    return clone(seed);
  }
}

function write(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event(DATA_EVENT));
}

export function getProducts() {
  return read(PRODUCTS_KEY, seedProducts);
}

export function saveProducts(list) {
  write(PRODUCTS_KEY, list);
}

export function getCategories() {
  return read(CATEGORIES_KEY, seedCategories);
}

export function saveCategories(list) {
  write(CATEGORIES_KEY, list);
}

export function slugify(text) {
  return (text || '')
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-');
}

// --- Auth demo ---
export function isAdmin() {
  if (typeof window === 'undefined') return false;
  try {
    return !!window.localStorage.getItem(ADMIN_KEY);
  } catch {
    return false;
  }
}

export function getAdminEmail() {
  if (typeof window === 'undefined') return '';
  try {
    const raw = window.localStorage.getItem(ADMIN_KEY);
    if (!raw) return '';
    return JSON.parse(raw).email || '';
  } catch {
    return '';
  }
}

export function loginAdmin(email, password) {
  const e = (email || '').trim();
  const p = (password || '').trim();
  if (!e || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return 'Email chưa đúng định dạng.';
  if (p.length < 4) return 'Mật khẩu tối thiểu 4 ký tự.';
  try {
    window.localStorage.setItem(ADMIN_KEY, JSON.stringify({ email: e, at: Date.now() }));
  } catch {
    return 'Không lưu được phiên đăng nhập trên trình duyệt này.';
  }
  return null;
}

export function logoutAdmin() {
  try {
    window.localStorage.removeItem(ADMIN_KEY);
  } catch {
    // bỏ qua
  }
}
