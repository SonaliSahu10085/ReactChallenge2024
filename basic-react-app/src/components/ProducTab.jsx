import Product from './Product.jsx'

export default function ProducTab() {
    return (
        <div>
            <h3>{"featured products".toUpperCase()}</h3>
            <Product
                no='1'
                title="Jira"
                desc="Flexible project management"
            />
            <Product
                no='2'
                title="Confluence"
                desc="Knowledge, all in one place"
            />
            <Product
                no='3'
                title="Jira Service Management"
                desc="High-velocity service delivery"
            />
            <Product
                no='4'
                title="Rovo"
                desc="Unlock enterprise knowledge"
            />
        </div>
    )

}