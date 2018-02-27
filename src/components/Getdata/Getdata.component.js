import axios from 'axios'

export default {
  name: 'getdata',
  components: {}, 
  props: [],
  data () {
    return {
      orario: { }
    }
  },
  computed: {

  },
  mounted () {
    this.get_tim()
  },
  methods: {
    get_tim() { 
      axios({ "metdod": "POST", "url": "https://monitor.unich.it/ws/angular.php" }).
      then(res => { this.orario = res.data }, error => { console.log(error) });
    }
  }
}
