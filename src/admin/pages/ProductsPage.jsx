import React from 'react';
import AdminLivePage from '../components/AdminLivePage';
import useAdminResource from '../hooks/useAdminResource';
import { productApi } from '../services/adminApi';

const PRODUCT_TYPES = [
  { value: 'phone',     label: 'Phone' },
  { value: 'tablet',    label: 'Tablet' },
  { value: 'laptop',    label: 'Laptop' },
  { value: 'accessory', label: 'Accessory' },
  { value: 'other',     label: 'Other' },
];

const COLUMNS = [
  { key: '_id',           label: 'ID',      render: (r) => <span className="font-mono text-xs text-gray-400">{r._id?.slice(-6)}</span> },
  { key: 'image',         label: 'Image',  render: (r) => r.image ? <img src={r.image} alt={r.name} className="h-12 w-12 object-cover rounded" /> : null },
  { key: 'name',          label: 'Product' },
  { key: 'brand',         label: 'Brand' },
  { key: 'category',      label: 'Category' },
  { key: 'type',          label: 'Type',    render: (r) => <span className="capitalize">{r.type}</span> },
  {
    key: 'price',
    label: 'Price',
    render: (r) => (
      <span>
        <span className="font-bold text-[#b8370e]">£{r.price}</span>
        {r.originalPrice > 0 && (
          <span className="text-gray-400 line-through ml-1.5 text-xs">£{r.originalPrice}</span>
        )}
      </span>
    ),
  },
  { key: 'tag',           label: 'Tag' },
  { key: 'tagline',       label: 'Tagline' },
  { key: 'warranty',      label: 'Warranty' },
  { key: 'returns',       label: 'Returns' },
  { key: 'capacities',    label: 'Capacities', render: (r) => (r.capacities || []).join(', ') },
  { key: 'conditions',    label: 'Conditions', render: (r) => (r.conditions || []).join(', ') },
  { key: 'colors',        label: 'Colors', render: (r) => (r.colors || []).map(c => c.name).join(', ') },
  { key: 'conditionPrices', label: 'Cond. Prices', render: (r) => (r.conditionPrices || []).map(cp => `${cp.condition}: £${cp.price}`).join(' | ') },
  { key: 'stockByVariant', label: 'Variants', render: (r) => (r.stockByVariant || []).length },
  { key: 'description',   label: 'Description', render: (r) => r.description?.text?.substring(0,30) + '...' },
  { key: 'isActive',      label: 'Status' },
];

const FORM_FIELDS = [
  { name: 'name',          label: 'Product Name',   required: true,  placeholder: 'e.g. iPhone 15 128GB' },
  { name: 'slug',          label: 'Slug',             hint: 'Auto-generated if empty' },
  { name: 'brand',         label: 'Brand',            placeholder: 'Apple' },
  { name: 'category',      label: 'Category',         placeholder: 'Smartphone' },
  { name: 'type',          label: 'Type',             type: 'select', options: PRODUCT_TYPES },
  { name: 'price',         label: 'Sale Price (£)',   type: 'number', required: true, placeholder: '349', step: '0.01' },
  { name: 'originalPrice', label: 'Original Price (£)', type: 'number', placeholder: '599', step: '0.01' },
  { name: 'savings',       label: 'Savings (£)',      type: 'number', placeholder: '0', step: '0.01' },
  { name: 'tag',           label: 'Tag / Badge',      placeholder: 'Top Deal' },
  { name: 'tagline',       label: 'Tagline',          placeholder: 'Best value this week' },
  { name: 'warranty',      label: 'Warranty',          placeholder: '12 months' },
  { name: 'returns',       label: 'Returns Policy',   placeholder: '30 days' },
  // Array / object fields – use textarea (JSON) or simple CSV
  { name: 'capacities',    label: 'Capacities (CSV)', placeholder: '64GB,128GB,256GB' },
  { name: 'conditions',    label: 'Conditions (CSV)', placeholder: 'New,Refurbished' },
  { name: 'colors',        label: 'Colors (JSON)',   placeholder: '{"name":"Red","hex":"#ff0000"}' , type: 'textarea', rows: 3 },
  { name: 'conditionPrices', label: 'Condition Prices (JSON)', placeholder: '[{"condition":"New","price":500}]', type: 'textarea', rows: 3 },
  { name: 'stockByVariant',  label: 'Stock By Variant (JSON)', placeholder: '[{"color":"Red","capacity":"128GB","condition":"New","sku":"IP13-128-RED","stock":10,"price":699}]', type: 'textarea', rows: 3 },
  { name: 'description',   label: 'Description Text', type: 'textarea', rows: 3, placeholder: 'Full product description...' },
  { name: 'descriptionBullets', label: 'Description Bullets (JSON)', placeholder: '[{"title":"Battery","text":"Long lasting"}]', type: 'textarea', rows: 3 },
  { name: 'isFeatured',   label: 'Featured',           type: 'checkbox', defaultValue: false },
  { name: 'isActive',     label: 'Active',             type: 'checkbox', defaultValue: true },
  { name: 'image',        label: 'Main Image',         type: 'file' },
  { name: 'images',       label: 'Additional Images', type: 'file', multiple: true, maxCount: 5 },
  { name: 'sortOrder',    label: 'Sort Order',        type: 'number', placeholder: '0' },
];

const buildPayload = (vals) => {
  const fd = new FormData();
  const { image, images, ...rest } = vals;
  // Main image
  if (image instanceof File) {
    fd.append('image', image);
  }
  // Additional images (up to 5)
  if (images) {
    const files = Array.isArray(images) ? images : (images instanceof FileList ? Array.from(images) : []);
    files.slice(0, 5).forEach((file, idx) => {
      fd.append('images', file);
      if (idx === 0 && !(image instanceof File)) {
        fd.append('image', file);
      }
    });
  }
  // Append other fields, handling arrays
  Object.entries(rest).forEach(([k, v]) => {
    if (Array.isArray(v)) {
      v.forEach((item) => fd.append(k, item));
    } else {
      fd.append(k, v === true ? 'true' : v === false ? 'false' : v ?? '');
    }
  });
  return fd;
};

const ProductsPage = () => {
  const resource = useAdminResource(productApi);
  return (
    <AdminLivePage
      title="Refurbished Products"
      subtitle="Inventory, pricing and tags for the online shop"
      actionLabel="Add Product"
      columns={COLUMNS}
      searchKeys={['name', 'brand', 'type', 'tag']}
      searchPlaceholder="Search products…"
      resource={resource}
      formFields={FORM_FIELDS}
      buildPayload={buildPayload}
    />
  );
};

export default ProductsPage;
