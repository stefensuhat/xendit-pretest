import toast from 'cogo-toast';
import { Api, fetch } from 'utils';

class ProductService {
    constructor() {
        this.fetch = fetch;
    }

    async post(formData, id, options) {
        const url = id ? `${Api.productUrl()}/${id}` : Api.productUrl();

        return this.fetch.post(url, formData, { ...options });
    }

    async deleteInstallment(productId, id) {
        const url = `${Api.productUrl()}/${productId}/${Api.productInstallmentUrl()}/${id}`;

        await toast.loading('Deleting...', { hideAfter: 1 })
            .then(() => {
                try {
                    this.fetch.delete(url);
                    toast.success('Hapus berhasil');
                } catch (error) {
                    toast.error(error);
                }
            });
    }

    async delete(id) {
        await toast.loading('Deleting...', { hideAfter: 1 })
            .then(() => {
                try {
                    const url = `${Api.productUrl()}/${id}`;

                    this.fetch.delete(url);
                    toast.success('Hapus berhasil');
                } catch (error) {
                    toast.error(error);
                }
            });
    }
}

export default new ProductService();
