export default ({ Vue }) => {
          Vue.mixin({
            computed: {
              $perPage () { return 8 }
            }
          })
        }